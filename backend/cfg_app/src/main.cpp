#include <glad/gl.h>
#include <GLFW/glfw3.h>

#include "ui.hpp"

#include <iostream>

void framebufferCallback(GLFWwindow* wnd, int w, int h) {
    gWindowWidth = w;
    gWindowHeight = h;

    wnd = wnd;

    glViewport(0, 0, w, h);
}

void cursorCallback(GLFWwindow* wnd, double x, double y) {
    gMouseX = x;
    gMouseY = y;
    wnd = wnd;
}

int main() {
    glfwInit();

    glfwWindowHint(GLFW_CONTEXT_VERSION_MAJOR, 4);
    glfwWindowHint(GLFW_CONTEXT_VERSION_MINOR, 5);
    glfwWindowHint(GLFW_OPENGL_PROFILE, GLFW_OPENGL_CORE_PROFILE);

    GLFWwindow* window = glfwCreateWindow(800, 600, "Configurate", nullptr, nullptr);

    if(!window) {
        return -1;
    }

    glfwMakeContextCurrent(window);

    if(!gladLoadGL((GLADloadfunc)glfwGetProcAddress)) {
        return -2;
    }

    glfwSetCursorPosCallback(window, cursorCallback);
    glfwSetFramebufferSizeCallback(window, framebufferCallback);
    framebufferCallback(window, 800, 600);

    InitUI();

    while(!glfwWindowShouldClose(window)) {
        glClear(0x4000);
        glClearColor(0.1f, 0.1f, 0.1f, 1.0f);

        gMouseLeftClicked = glfwGetMouseButton(window, GLFW_MOUSE_BUTTON_1) == GLFW_PRESS;

        ButtonUI("\x1b[777777Hello", 300, 300, 50, 10);

        glfwSwapBuffers(window);

        glfwPollEvents();
    }

    glfwTerminate();

    return 0;
}