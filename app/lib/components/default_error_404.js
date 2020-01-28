export default {
    render() {
        return new Promise((resolve, reject) => {
            resolve(
                `
                <div class="mt-5 pt-5 text-center">
                    <h1 class="display-2 py-2">404</h1>
                    <h2 class="display-2 py-2">Page not found</h2>
                    <a href="javascript:history.back()" class="btn btn-success btn-lg btn-block w-50 mx-auto mt-5">Go back</a>
                </div>
                `
            );
        });
    }
}