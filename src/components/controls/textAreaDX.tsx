import {Textarea, TextareaInput} from '../ui/textarea';

const TextAreaDX=(props: any)=>(
    <Textarea
      size="md"
      isReadOnly={props.isReadOnly}
      isInvalid={props.isInvalid}
      isDisabled={props.isDisabled}
      className="w-64">
      <TextareaInput placeholder={props.placeholderText} />
    </Textarea>
  )

  export default TextAreaDX;
