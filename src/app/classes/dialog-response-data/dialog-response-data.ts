export class DialogResponseData {

    public isSuccess;
    public data;
    public isCreated = 1;

    constructor(isSuccess, data, isCreated = 1) {

        this.isSuccess = isSuccess;
        this.data = data;
        this.isCreated = isCreated
    }
}
