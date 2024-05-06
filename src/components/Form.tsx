import { useSubmit } from "react-router-dom"
import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseTitle, chooseGenre, chooseAuthor, choosePublisher, choosePages } from "../redux/slices/RootSlice"

interface BookFormProps {
  id?: string[]
}

const Form = ( props:BookFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.title } ${ props.id }`)
      setTimeout(() => {window.location.reload()}, 500);
      event.target.reset()
    } else {
      dispatch(chooseTitle(data.title));
      dispatch(chooseGenre(data.genre));
      dispatch(chooseAuthor(data.author));
      dispatch(choosePublisher(data.publisher));
      dispatch(choosePages(data.print_pages));

      server_calls.create(store.getState())
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="title">Book title</label>
          <Input {...register('title')} name='title' placeholder="Title" />
        </div>
        <div>
          <label htmlFor="genre">Genre</label>
          <Input {...register('genre')} name='genre' placeholder="Genre" />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <Input {...register('author')} name='author' placeholder="Author" />
        </div>
        <div>
          <label htmlFor="publisher">Publisher</label>
          <Input {...register('publisher')} name='publisher' placeholder="Publisher" />
        </div>
        <div>
          <label htmlFor="publisher">Publisher</label>
          <Input {...register('publisher')} name='publisher' placeholder="Publisher" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default Form