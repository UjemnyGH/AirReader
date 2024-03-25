#include "../network.hpp"
#include <thread>

NetworkTCP client;

int main() {
    client.OpenSocket("127.0.0.1", 8765);
    client.clConnect();
    
    client.clSendData("Gimme data");
    std::cout << client.clReceiveData() << "\n";

    return 0;
}