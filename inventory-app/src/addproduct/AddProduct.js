import React from "react";
import './AddProduct.css'
export const AddProduct=(props)=>{
    //receiving props from external component
   const{name:propsName,cost:propsCost}=props
    //React Hook
    const [IsAddDisabled,setIsAddDisabled]=React.useState(false)
    const [productName,setProductName]=React.useState(propsName||'')
    const [cost,setCost]=React.useState(propsCost||0)

    //validators
    const validateName = text => /[A-Za-z]{2,15}/.test(text);

    const validateForm = () => {
        setIsAddDisabled(cost <= 0 || !validateName(productName));
    };

    //set values whenever modified

    const handleNameBlur = evt => {
        const nameValue = evt.target.value.trim();
        setProductName(nameValue);
    };

    const handleCostChange = evt => {
        const costValue = evt.target.value;
        setCost(costValue);
    };

    const handleSubmit=()=>{
        console.log(productName,cost);
    }

    React.useEffect(() => {
        validateForm();
    }, [productName, cost]);

    return(
          <form className='form-style'>
              <fieldset>
                  <legend>Add Product</legend>
              <input
              type="text"
              placeholder='Product Name'

              onBlur={handleNameBlur}
              />
              <input
              type="number"
              placeholder='Cost'
              onChange={handleCostChange}
              />
              <input
              type="button"
              onClick={handleSubmit}
              value='Add Product'
              disabled={IsAddDisabled}
              />
              </fieldset>

          </form>
        )

}

