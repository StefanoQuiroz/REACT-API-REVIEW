import React from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
const InputLabel = () => {
    return (
    
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="id" className="mr-sm-2">Id </Label>
                <Input type="number" name="id" id="id"/>
            </FormGroup>                        
    );
}

export default InputLabel;
