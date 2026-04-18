import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const LoginForm = () => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>

      <CardContent>

      </CardContent>
    </Card>
  )
}

export { LoginForm }