import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import textLogo from '@/assets/rks-text.png'
import { Link } from 'react-router-dom'
import { MarketingAuthNavbar } from '@/components/marketing-auth-navbar.tsx'
import { InputFormField } from '@/components/input-form-field.tsx'
import { loginFormData, useLoginForm } from '@/features/auth/forms/login-form.tsx'
import { Form } from '@/components/ui/form.tsx'

export default function Login() {
  const loginForm = useLoginForm()
  return (
    <Form {...loginForm}>
      <form
        onSubmit={loginForm.handleSubmit((formData: loginFormData) => {
          console.log(formData)
        })}
      >
        <MarketingAuthNavbar showSignin={false} />
        <div className='flex h-screen w-full items-center justify-center px-4'>
          <Card className='mx-auto w-full max-w-md overflow-hidden shadow-2xl'>
            <div className='bg-gradient-to-r from-[#ad9551] to-white p-6'>
              <div className='flex items-center justify-center space-x-2'>
                <img src={textLogo} alt='RKS' />
              </div>
            </div>
            <CardHeader className='space-y-1'>
              <CardTitle className='text-center text-2xl font-bold'>Login</CardTitle>
              <CardDescription className='text-center'>Enter your credentials to access your account</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <InputFormField form={loginForm} name={'username'} formLabel={'Username'} />

              <InputFormField form={loginForm} name={'password'} formLabel={'Password'} />
              <div className={'flex justify-end'}>
                <Link to={'.'} className='text-sm text-blue-600 hover:underline'>
                  Forgot password?
                </Link>
              </div>

              <Button
                type='submit'
                className='w-full rounded-md bg-gradient-to-r from-[#ad9551] to-white py-2 text-white transition-all duration-200 hover:from-[#ad9551]/95 hover:to-white/95'
              >
                Sign In
              </Button>
            </CardContent>
          </Card>
        </div>
      </form>
    </Form>
  )
}
