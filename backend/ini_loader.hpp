#pragma once
#ifndef __INI_LOADER_
#define __INI_LOADER_

#include <string>
#include <iostream>
#include <vector>
#include <map>
#include <fstream>
#include <cstdint>

#define INI_WARN(msg) std::cout << "\x1b[38;2;128;128;128m[\x1b[38;2;255;255;0mINI_WARNING\x1b[38;2;128;128;128m]: " << __FILE__ << ":" << __LINE__ << " @ " << __FUNCTION__ << "():\t" << msg << std::endl;

struct Vars {
    std::string name;
    std::string value;

    Vars() = default;
};

struct Section {
    std::string name;
    std::map<std::string, Vars> vars;

    Section() = default;
};

class IniLoader {
private:
    const std::string comment = "; That is comment described in IniLoader class\n";

public:
    std::map<std::string, Section> sections;

    std::string ini_file_data;
    std::string file_path;

    void AddSection(std::string const name) {
        sections.insert(std::make_pair(name, Section()));

        sections[name].name = name;
    }

    void AddVar(std::string const sectionName, std::string const varName, std::string const valueStr) {
        sections[sectionName].vars.insert(std::make_pair(varName, Vars()));

        sections[sectionName].vars[varName].name = varName;
        sections[sectionName].vars[varName].value = valueStr;
    }

    void Save(std::string const filename) {
        ini_file_data = comment;
        ini_file_data += "; ";
        ini_file_data += filename;
        ini_file_data += "\n\n";

        for(auto section : sections) {
            ini_file_data += "[";
            ini_file_data += section.second.name;
            ini_file_data += "]\n";

            for(auto var : section.second.vars) {
                ini_file_data += var.second.name;
                ini_file_data += " = ";
                ini_file_data += var.second.value;
                ini_file_data += "\n";
            }

            ini_file_data += "\n";
        }

        std::ofstream f;

        file_path = filename;

        f.open(file_path, std::ios_base::binary);

        f.write(ini_file_data.data(), ini_file_data.size());

        f.close();
    }

    void Load(std::string const filename) {
        sections.clear();

        std::ifstream f;

        file_path = filename;

        f.open(file_path, std::ios_base::binary);

        if(f.bad()) {
            INI_WARN("Bad file " << filename)

            f.close();
            
            return;
        }

        if(!f.is_open()) {
            INI_WARN("Cannot open file " << filename)

            f.close();
            
            return;
        }

        std::string line;

        std::string section_name;
        std::string var_name;
        std::string var_value;

        while(!f.eof()) {
            std::getline(f, line);

            if(line.find("[") == 0) {
                section_name.clear();
                std::copy(line.begin() + 1, line.end() - 1, std::back_inserter(section_name));

                sections.insert(std::make_pair(section_name, Section()));
                sections[section_name].name = section_name;
            }
            else if(line.find(";") == 0 || line.find("#") == 0 || line.length() < 2) {
                continue;
            }
            else {
                var_name.clear();
                var_value.clear();

                uint32_t equal_char = line.find("=");

                std::copy(line.begin(), line.begin() + (equal_char - 1), std::back_inserter(var_name));
                std::copy(line.begin() + (equal_char + 2), line.end(), std::back_inserter(var_value));

                sections[section_name].vars.insert(std::make_pair(var_name, Vars()));

                sections[section_name].vars[var_name].name = var_name;
                sections[section_name].vars[var_name].value = var_value;
            }
        }

        f.close();
    }
};

#endif