function login(username: string, password: string): string {const user = {
        username,
        password,
    };const result = user["username"];
    return result;
}

login("John Doe", "secret");
