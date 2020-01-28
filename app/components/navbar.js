export default {
    render(isActive) {
        let navbar = {};

        fetch('./app/components/api/nav2.json').then(res => {
            res.json().then(json => {
                navbar = json;
                console.log(json);
            }).catch(error => console.log(error));
        }).catch(err => console.error(err));

        console.log(navbar);
        

        return `
            <li class="nav-item mx-3${ isActive('contacts') ? ' nav-link-active' : ''}">
                <a class="nav-link text-dark px-0" href="./#/contacts">Find Pomah</a>
            </li>
            <li class="nav-item mx-3${ isActive('community') ? ' nav-link-active' : ''}">
                <a class="nav-link text-dark px-0" href="./#/community">Community</a>
            </li>
            <li class="nav-item mx-3${ isActive('blog') ? ' nav-link-active' : ''}">
                <a class="nav-link text-dark px-0" href="./#/blog">Blog</a>
            </li>
            <li class="nav-item mx-3${ isActive('about-us') ? ' nav-link-active' : ''}">
                <a class="nav-link text-dark px-0" href="./#/about-us">About Pomah</a>
            </li>
        `;
    }
}