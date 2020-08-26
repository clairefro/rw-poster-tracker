import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/forms'

const PosterForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.poster?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="lon"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lon
        </Label>
        <TextField
          name="lon"
          defaultValue={props.poster?.lon}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          dataType="Float"
        />
        <FieldError name="lon" className="rw-field-error" />

        <Label
          name="lat"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lat
        </Label>
        <TextField
          name="lat"
          defaultValue={props.poster?.lat}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
          dataType="Float"
        />
        <FieldError name="lat" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        <TextField
          name="description"
          defaultValue={props.poster?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="description" className="rw-field-error" />

        <Label
          name="location_type"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Location type
        </Label>
        <TextField
          name="location_type"
          defaultValue={props.poster?.location_type}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="location_type" className="rw-field-error" />

        <Label
          name="date_posted"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Date posted
        </Label>
        <TextField
          name="date_posted"
          defaultValue={props.poster?.date_posted}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="date_posted" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PosterForm
