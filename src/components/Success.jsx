function Success() {
    return (
        <div>
            <h1>Login Page</h1>
            <form>
                <label>Username:</label>
                <input type="text" name="username" required />
                <br />
                <label>Password:</label>
                <input type="password" name="password" required />
                <br />
                <button type="submit">Login</button>
            </form>
           
        </div>
    );
}
export default Success;