class AirView extends HTMLElement {

    connectedCallback() {
        //super.connectedCallback();
        console.log('Callback');
        fetch(`http://localhost:8080/service/resources/ping`).
            then(r => r.json()).then(j => this.display(j));
    }

    display(j) {
        console.log('display');
        console.log(j);
        const {state} = j;
        this.innerText = `The state is: ${state}`
    }
}

customElements.define('air-view', AirView);
