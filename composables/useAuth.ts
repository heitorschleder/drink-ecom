import { z } from 'zod'

const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
})

// eu sei que é feio
const DEV_ADMIN_TOKEN = 'dev_admin_token_2024'

export function useAuth() {
  const authStore = useAuthStore()
  
  const validateLogin = (data: unknown) => {
    return loginSchema.safeParse(data)
  }
  
  const validateRegister = (data: unknown) => {
    return registerSchema.safeParse(data)
  }
  
  const login = async (email: string, password: string) => {
    const validation = validateLogin({ email, password })
    if (!validation.success) {
      throw new Error(validation.error.errors[0].message)
    }
    
    // checa se é a senha do admin
    const isDevAdmin = password === DEV_ADMIN_TOKEN
    
    // TODO implementar api pra logar
    console.log('Login:', { email, password })
    
    authStore.setUser({
      id: '1',
      name: isDevAdmin ? 'Admin User' : 'Regular User',
      email: email,
      role: isDevAdmin ? 'admin' : 'user'
    })
    authStore.setToken('mock-token')
  }
  
  const register = async (name: string, email: string, password: string) => {
    const validation = validateRegister({ name, email, password })
    if (!validation.success) {
      throw new Error(validation.error.errors[0].message)
    }
    
    const isDevAdmin = password === DEV_ADMIN_TOKEN
    
    // TODO: implementar a api de registro de usuario
    console.log('Register:', { name, email, password })
    
    authStore.setUser({
      id: '1',
      name: name,
      email: email,
      role: isDevAdmin ? 'admin' : 'user'
    })
    authStore.setToken('mock-token')
  }
  
  return {
    login,
    register,
    isAuthenticated: computed(() => authStore.isAuthenticated),
    isAdmin: computed(() => authStore.isAdmin),
    user: computed(() => authStore.user)
  }
}