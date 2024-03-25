#pragma once
#ifndef __NETWORK_
#define __NETWORK_

#ifdef _WIN32
#include <Winsock2.h>
#else
#include <arpa/inet.h>
#include <netinet/in.h>
#include <sys/socket.h>
#include <unistd.h>
#endif

#include <cerrno>
#include <cstring>
#include <iostream>
#include <vector>

#define NET_ERR(msg) std::cout << "\x1b[38;2;128;128;128m[\x1b[38;2;255;0;0mNETWORK_ERROR\x1b[38;2;128;128;128m]: " << __FILE__ << ":" << __LINE__ << " @ " << __FUNCTION__ << "():\t" << msg << "\t" << strerror(errno) << std::endl;
#define NET_INFO(msg) std::cout << "\x1b[38;2;128;128;128m[\x1b[38;2;0;192;192mNETWORK_INFO\x1b[38;2;128;128;128m]: " << __FILE__ << ":" << __LINE__ << " @ " << __FUNCTION__ << "():\t" << msg << std::endl;

class NetworkTCP {
private:
    struct sockaddr_in mAddress;
    int mSocket;

public:
    void OpenSocket(std::string address, uint16_t port) {
        mAddress.sin_family = AF_INET;
        mAddress.sin_port = ((port & 0xff) << 8) | ((port >> 8) & 0xff);
        mAddress.sin_addr.s_addr = inet_addr(address.c_str());

        mSocket = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);

        if(mSocket == -1) {
            NET_ERR("Creating socked: FAILED!")

            return;
        }
    }

    void clConnect() {
        if(connect(mSocket, (struct sockaddr*)&mAddress, sizeof(mAddress)) == -1) {
            NET_ERR("Connection: FAILED!")

            close(mSocket);

            return;
        }
    }

    void svOpen(uint16_t port) {
        mAddress.sin_family = AF_INET;
        mAddress.sin_port = ((port & 0xff) << 8) | ((port >> 8) & 0xff);
        mAddress.sin_addr.s_addr = inet_addr("127.0.0.1");

        mSocket = socket(AF_INET, SOCK_STREAM, IPPROTO_TCP);

        if(mSocket == -1) {
            NET_ERR("Creating socked: FAILED!")

            return;
        }
    }

    void svBind() {
        if(bind(mSocket, (struct sockaddr*)&mAddress, sizeof(mAddress)) == -1) {
            NET_ERR("Binding: FAILED!")

            close(mSocket);

            return;
        }
    }

    void svListen(uint32_t maxQueue = 256) {
        if(listen(mSocket, maxQueue) == -1) {
            NET_ERR("Listening: FAILED!");

            close(mSocket);

            return;
        }
    }

    // return client socket
    int svAccept() {
        uint32_t socklen = sizeof(mAddress);
        int client_socket = accept(mSocket, (struct sockaddr*)&mAddress, &socklen);

        if(client_socket == -1) {
            NET_ERR("Client connection: FAILED!");

            return -1;
        }

        return client_socket;
    }

    void clSendData(std::string data) {
        if(send(mSocket, (void*)data.c_str(), data.size(), 0) == -1) {
            NET_ERR("Send: FAILED!")

            return;
        }
    }

    std::string clReceiveData(uint32_t dataSize = 8192) {
        std::string result;
        result.resize(dataSize);

        int64_t size = recv(mSocket, (void*)result.data(), dataSize, 0);

        if(size < 0) {
            NET_ERR("Receive: FAILED!")
            //perror(strerror(errno));
        }
        else {
            NET_INFO("Received " << size << " bytes of data, returned " << result.length() << " bytes of data!")
        }

        return result;
    }

    void svSendData(int32_t client, std::string data) {
        if(send(client, (void*)data.c_str(), data.size(), 0) == -1) {
            NET_ERR("Send: FAILED!")

            return;
        }
    }

    std::string svReceiveData(int32_t client, uint32_t dataSize = 8192) {
        std::string result;
        result.resize(dataSize);

        int64_t size = recv(client, (void*)result.data(), dataSize, 0);

        if(size < 0) {
            NET_ERR("Receive: FAILED!")
            //perror(strerror(errno));
        }
        else {
            NET_INFO("Received " << size << " bytes of data, returned " << result.length() << " bytes of data!")
        }

        return result;
    }

    ~NetworkTCP() {
        close(mSocket);
    }
};

#endif