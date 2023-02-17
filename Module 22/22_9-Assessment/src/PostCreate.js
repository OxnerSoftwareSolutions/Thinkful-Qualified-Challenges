import React from "react"
/**
 * Displays the form to create a new post, which can be either an image or a text post.
 *
 * When the form is submitted, a new post is created and the form contents cleared.
 */

function PostCreate( { initialFormState, formData, setFormData, type, setType, posts } ) {

  const newPost = { 
    id: "",
    type: type,
    content: formData.content 
  }

  const handleChange = (event) => setFormData( {...formData, [event.target.name]: event.target.value} )

  const handleTypeChange = (event) => setType(event.target.value)

   // TODO: When the form is submitted, a new post should be created, and the form contents cleared.

  const handleSubmit = (event) => {
    event.preventDefault()
    posts.push(newPost)
    setFormData( { ...initialFormState } )
  }

   // For the tests to pass, the form below must have:
  // - a `name="create"` attribute
  // - one child `<button>` with a `type="submit"` attribute
  // - one child `<select>` with a `name="type"` attribute
  // - one child `<textarea>` or `<input>` (not both at the same time) with a `name="content"`

  return (
    <form name="create" id="create" onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create</legend>
        <div>
          <label htmlFor="type">Type: </label>
          <select 
          id="type" 
          name="type"
          onChange={handleTypeChange} 
          required={true}>
            <option value="Text">Text</option>
            <option value="Image">Image</option>
          </select>
        </div>
        <div>
          <label htmlFor="content">Content: </label>
          {type === "Text" ? (
            <textarea 
            id="content" 
            name="content" 
            value={formData.content} 
            onChange={handleChange}
            required={true} 
            rows={3} 
            />
          ) : (
            <input 
            id="content" 
            name="content" 
            type="url" 
            value={formData.content} 
            onChange={handleChange}
            required={true} 
            />
          ) }
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </fieldset>
    </form>
  )
}

export default PostCreate;