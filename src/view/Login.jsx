import { Label } from '../components/atoms/Label'
import { Title } from '../components/atoms/Title'
import Input from '../components/atoms/Input'
import Button from '../components/atoms/Button'
import { useForm } from 'react-hook-form'
import request from '../api/request'
import { actions } from '../features/user_slice'
import { useDispatch } from 'react-redux'

function Login() {
  const dispatch = useDispatch()
  const { register, handleSubmit, formState } = useForm()
  const onSubmit = async (formData) => {
    const { status, data } = await request.post('/login', formData)
    if (status === 200) {
      window.localStorage.setItem('authorization', data.token)
      const me = await request.get('/me')
      dispatch(actions.login(me.data))
    }
  }

  return (
    <div>
      <Title className="mt-10">登录</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <Label htmlFor="user_name">User Name</Label>
          <Input
            id="user_name"
            name="user_name"
            autoComplete="user_name"
            type="text"
            className="form-control mx-3"
            {...register('user_name', { required: true })}
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            autoComplete="current-password"
            type="password"
            className="form-control mx-3"
            {...register('password', { required: true })}
          />
        </div>
        <Button type="submit" className="mx-3 mt-3">
          登录
        </Button>
        <p className="mx-3 color-fg-danger">{Object.keys(formState.errors)}</p>
      </form>
    </div>
  )
}

export default Login
