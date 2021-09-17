import BaseComponent from '../BaseComponent.js';
import AuthNavbar from '../components/AuthNavbar.js';
import InputWrapper from '../components/InputWrapper.js';

import { appendTo } from '../utils.js';
export default class CreateChatGroupScreen extends BaseComponent {

    constructor(props) {
        super(props);

        this.state = {
            data: {
                groupName: '',
                members: []
            },
            errors: {
                groupName: '',
                members: []
            }
        }
    }

    handleInputChange = (fieldName, fieldValue, fieldIndex = 0) => {
        if (fieldName == 'groupName') {
            let tmpState = this.state;
            tmpState.data.groupName = fieldValue;
            this.setState(tmpState);
            console.log(tmpState);
        } else if (fieldName == 'member') {

        }
    }

    handleAddMember = () => {
        let tmpState = this.state.data;
        tmpData.data.members.push('');

        this.setState(tmpState);
        console.log(this.state);
    }

    render() {
        let $container = document.createElement('div');

        let _navbar = new AuthNavbar({});
        appendTo($container, _navbar);

        let $form = document.createElement('form');

        let $formTitle = document.createElement('h4');
        $formTitle.innerHTML = 'Create chat group';

        let _groupName = new InputWrapper({
            placeholder: 'Group name',
            type: 'text',
            value: this.state.data.groupName,
            error: this.state.errors.groupName,
            onchange: (event) => { this.handleInputChange('groupName', event.target.value); }
        });

        let $h5 = document.createElement('h5');
        $h5.innerHTML = 'Member List';

        let $memberList = document.createElement('div');

        for (let i = 0; i < this.state.data.members.length; i++) {
            let _member = new InputWrapper({
                placeholder: 'Member #' + (i + 1),
                type: 'email',
                value: this.state.data.members[i],
                error: '',
                onchange: () => {}
            });
            appendTo($memberList, _member);
        }


        let $addBtn = document.createElement('button');
        $addBtn.type = 'button';
        $addBtn.className = 'btn btn-secondary float-right mb-3';
        $addBtn.innerHTML = 'Add member';
        $addBtn.onclick = this.handleAddMember;

        let $submitBtn = document.createElement('button');
        $submitBtn.className = 'btn btn-primary btn-block';
        $submitBtn.innerHTML = 'Create'

        $form.append($formTitle);
        appendTo($form, _groupName);
        $form.append($h5, $memberList, $addBtn, $submitBtn);

        $container.append($form);
        return $container;
    }
}