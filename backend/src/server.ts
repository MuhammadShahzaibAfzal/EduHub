function login(username: string, password: string): boolean {
    return username === "John Doe" && password === "secret";
}

console.log(login("John Doe", "secret"));
