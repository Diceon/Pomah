export default {
    render() {
        return new Promise((resolve, reject) => {
            resolve(
                `
                <div class="contacts-wrapper w-100 mt-5">
                    <div class="text-center mb-5">
                        <h1>Here's how to find us!</h1>
                    </div>
                    <div class="map-wrapper mx-auto">
                        <iframe class="d-block mx-auto shadow-lg" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d15506.059904565689!2d25.26562099244069!3d54.709806197862584!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slt!4v1575491188339!5m2!1sen!2slt" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                    </div>
                    <div class="mt-5 text-center">
                        <p class="h3 text-info border-bottom d-inline-block">Ozo g. 25, Vilnius</p>
                    </div>
                </div>
                `
            );
        });
    }
}