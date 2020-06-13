export class DialogData {

    public titleMsg;
    public apiUrl;
    public apiMethod;
    public id = 0;
    public data = {};
    public submitBtnText;
    public cancelBtnText;
    public successMessage;

    constructor(
        titleMsg,
        apiUrl,
        apiMethod,
        id,
        data = {},
        submitBtnText = "Submit",
        cancelBtnText = "Cancel",
        successMessage = "Entry created successfully"
    ) {

        this.titleMsg = titleMsg;
        this.apiUrl = apiUrl;
        this.apiMethod = apiMethod;
        this.id = id;
        this.data = data;
        this.submitBtnText = submitBtnText;
        this.cancelBtnText = cancelBtnText;
        this.successMessage = successMessage;
    }

}
