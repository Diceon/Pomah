export default {
    render(data) {
        return new Promise((resolve, reject) => {
            resolve(
                `
                <div class="login-box">
                <div class="h2 font-weight-bold text-dark">Register to Pomah</div>
                <div class="text-secondary my-3">Join to Pomah you will get the best recommendation for rent house in near of you.</div>
                    <div class="login-box-innerwrapper position-relative mt-5">
                        <ul class="login-links list-unstyled">
                            <li class="login-link-active">
                                <a href="./#/register" class="text-dark text-decoration-none">Register</a>
                            </li>
                            <li>
                                <a href="./#/login" class="text-dark text-decoration-none">Login</a>
                            </li>
                        </ul>
                        <div class="login-form mt-5">
                            <form action="#">
                                <div>
                                    <label for="username" class="w-100 text-secondary"><small>Username</small></label>
                                    <input type="text" class="border-0 py-1 h5" id="username" placeholder="Username" required>
                                </div>
                                <div>
                                    <label for="email" class="w-100 text-secondary"><small>Email</small></label>
                                    <input type="email" class="border-0 py-1 h5" id="email" placeholder="Email" required>
                                </div>
                                <div>
                                    <label for="password" class="w-100 text-secondary"><small>Password</small></label>
                                    <input type="password" class="border-0 py-1 h5" id="password" placeholder="Password" required>
                                </div>
                                <div>
                                    <button type="submit" class="btn btn-block py-3 text-white">REGISTER</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                `
            );
        });
    }
}