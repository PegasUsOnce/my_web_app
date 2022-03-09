/** Репозиторий пользователя */
export class UserRepository {
  /** Авторизоваться */
  public async logIn (login: string, password: string): Promise<boolean> {
    return login === 'admin' && password === 'admin'
  }

  /** Зарегистрироваться */
  public async signIn (login: string, password: string): Promise<boolean> {
    throw new Error('WIP: Авторизация недоступна')
  }
}
