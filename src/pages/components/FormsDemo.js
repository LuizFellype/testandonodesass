import React from 'react'

// Custom components
import InputText from '../../components/forms-demo/InputText/InputText'
import TextArea from '../../components/forms-demo/TextArea'
import AutoComplete from '../../components/forms-demo/AutoComplete/AutoComplete'
import MultiSelect from '../../components/forms-demo/MultiSelect'
import Calendar from '../../components/forms-demo/Calendar/Calendar'
import Chips from '../../components/forms-demo/Chips'
import Checkboxes from '../../components/forms-demo/Checkboxes'
import RadioButtons from '../../components/forms-demo/RadioButtons'
import Switch from '../../components/forms-demo/Switch'
import Dropdown from '../../components/forms-demo/Dropdown'
import Password from '../../components/forms-demo/Password'
import InputSpinner from '../../components/forms-demo/InputSpinner'
import InputSlider from '../../components/forms-demo/InputSlider'
import Listbox from '../../components/forms-demo/Listbox'
import InputRating from '../../components/forms-demo/InputRating'
import InputColor from '../../components/forms-demo/InputColor'
import InputGroups from '../../components/forms-demo/InputGroups/InputGroups'
import RichEditor from '../../components/forms-demo/RichEditor'
import Buttons from '../../components/forms-demo/Buttons/Buttons'
import ColoredButtons from '../../components/forms-demo/ColoredButtons/ColoredButtons'

const FormsDemo = () => (
  <div className='p-grid p-fluid'>
    <div className='p-col-12 p-lg-6'>
      <InputText />
      <TextArea />
      <AutoComplete />
      <MultiSelect />
      <Calendar />
      <Chips />
    </div>

    <div className='p-col-12 p-lg-6'>
      <Checkboxes />
      <RadioButtons />
      <Switch />
      <Dropdown />
      <Password />
      <InputSpinner />
      <InputSlider />
      <Listbox />
      <InputRating />
      <InputColor />
    </div>

    <div className='p-col-12'>
      <InputGroups />
    </div>

    <div className='p-col-12'>
      <RichEditor />
    </div>

    <div className='p-col-12 p-nogutter'>
      <div className='p-grid'>
        <div className='p-col-12 p-lg-6'>
          <Buttons />
        </div>
        <div className='p-col-12 p-lg-6'>
          <ColoredButtons />
        </div>
      </div>
    </div>
  </div>
)

export default FormsDemo
