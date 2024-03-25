#include "../network.hpp"
#include "../ini_loader.hpp"

IniLoader gNetworkConfig;
NetworkTCP gNetwork;

bool FileExist(std::string filename) {
    FILE* f = fopen(filename.c_str(), "r");

    bool exist = false;
    if(f != nullptr) {
        fclose(f);

        exist = true;
    }

    return exist;
}

int main() {
    if(FileExist("./deviceNetworkConfig.cfg")) {
        gNetworkConfig.Load("./deviceNetworkConfig.cfg");
    }
    else {
        gNetworkConfig.AddSection("Network");
        gNetworkConfig.AddVar("Network", "IPAddress", "84.10.49.34");
        gNetworkConfig.AddVar("Network", "Port", "80");
        gNetworkConfig.AddSection("File");
        gNetworkConfig.AddVar("File", "Filename", "{}");
        gNetworkConfig.AddVar("File", "Path", "./");

        gNetworkConfig.Save("./deviceNetworkConfig.cfg");

        INI_WARN("deviceNetworkConfig.cfg doesn`t exist. Creating new one with default values (localhost:80)!");
    }

    gNetwork.OpenSocket(gNetworkConfig.sections["Network"].vars["IPAddress"].value, (uint16_t)atoi(gNetworkConfig.sections["Network"].vars["Port"].value.c_str()));

    while(true) {
        gNetwork.clConnect();

        std::string data = gNetwork.clReceiveData();

        std::cout << data << std::endl;
    }

    return 0;
}