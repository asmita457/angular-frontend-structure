import { FormGroup } from '@angular/forms';

export interface CreateUpdateComponentInterface {

    resourceName: string;
    baseUrl: string;
    id: number;
    data: any;

    isCreate: number;
    titleMessage: string;

    form: FormGroup;

    // Form Submit
    onSubmit(data);

    // After Succesfully created
    handlePostSuccess(data);

    // Error in Creation
    handlePostError(data);

    // After Succesfully updated
    handlePutSuccess(data);

    // Error in update
    handlePutError(data);

    // Api Calls for creation or updation
    handlePostData(data);

    // Back to previou page
    goBack()

    // Fetch data for update
    fetchData(url)

    // Prepare view data on forms
    prepareViewData(response);
}
