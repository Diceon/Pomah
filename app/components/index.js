export default {
    render() {
        return new Promise((resolve, reject) => {
            resolve(`
            <div class="index-wrapper d-flex flex-column justify-content-center align-items-center">
                <i class="fa fa-home text-success" aria-hidden="true"></i>
                <div class="mt-3 text-center">
                    <h1 class="display-4 font-weight-bold text-success">Welcome to Pomah</h1>
                </div>
            </div>
            `);
        });
    }
}