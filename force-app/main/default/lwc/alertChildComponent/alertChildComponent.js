import { LightningElement, api } from 'lwc';

export default class AlertChildComponent extends LightningElement {
    @api message
    @api className //test

    get alertClassName(){
        return this.className ? `alert ${this.className}`:`alert`
    }
}
