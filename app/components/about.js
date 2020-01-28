export default {
    render() {
        return new Promise((resolve, reject) => {
            resolve(`
            <div class="about-wrapper">
                <div class="text-center">
                    <h1 class="d-inline-block">About us</h1>
                </div>
            <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis enim ut finibus venenatis. Fusce iaculis ac libero in condimentum. Cras ullamcorper ipsum est, in imperdiet justo condimentum porta. Morbi pharetra augue et eleifend scelerisque. Cras porttitor, mauris at ultrices.</p>
            </div>
            `);
        });
    }
}