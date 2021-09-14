import BaseComponent from "../BaseComponent.js";

export default class AuthNavbar extends BaseComponent {

    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {

        let $container = document.createElement('nav');
        $container.className = 'navbar navbar-expand-lg navbar-light bg-light'; //ghi đè class

        let $brand = document.createElement('a');
        $brand.className = 'navbar-brand';
        $brand.href = "#"
        $brand.innerHTML = 'WebChat';

        let $home = document.createElement('a');
        $home.className = 'navbar-link';
        $home.href = "#"
        $home.innerHTML = 'Home';

        let $action = document.createElement('div');
        $action.className = 'ml-auto';

        let $profile = document.createElement('button');
        $profile.className = 'btn btn-primary mr-3';
        $profile.innerHTML = 'Welcome,' + this.props.name ?? 'Someone';

        let $logout = document.createElement('button');
        $logout.className = 'btn btn-danger'
        $logout.innerHTML = 'Logout';

        $action.append($profile, $logout);

        $container.append($brand, $home, $action);

        return $container;
    }
}