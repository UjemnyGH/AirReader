#include "../network.hpp"
#include <thread>

NetworkTCP server;

int main() {
    server.OpenSocket("127.0.0.1", 8765);

    server.svBind();

    bool running = true;

    while(running) {
        auto start = std::chrono::high_resolution_clock::now();

        server.svListen(8);

        int client = server.svAccept();

        std::string recD = server.svReceiveData(client);

        std::cout << "Received: " << recD << std::endl;

        if(recD == std::string("Gimme data")) {
            printf("Send data!");
            server.svSendData(client, "Here catch this!");
        }
        else {
            server.svSendData(client, "Wrong data");
        }
        /*else if(server.svReceiveData(client) == std::string(client, "STOP")) {
            running = false;
        }*/

        close(client);
    }

    return 0;
}