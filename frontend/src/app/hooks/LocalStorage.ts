
export default class LocalStorage{
    private static salt = "mymeet"

    static encryptData(data: string): string {
        const saltedValue = data + LocalStorage.salt;

        return btoa(saltedValue); // Convert to Base64 encoded string
      }
      
      static decryptData(encodedData: string): string {
        return (atob(encodedData)).slice(0, -LocalStorage.salt.length); // Decode Base64 encoded string
      }
    static saveItem(slug: string, value: any) {
        return window.localStorage.setItem(slug, LocalStorage.encryptData(value))
    }
    static getItem(slug: string) {
        if (!window.localStorage.getItem(slug)) return null
        return LocalStorage.decryptData(window.localStorage.getItem(slug) ?? "")
    }
    static isAuth() {
        return LocalStorage.getItem("user") != null
    }
    static saveUser(value: any) {
        return window.localStorage.setItem("user", LocalStorage.encryptData(JSON.stringify(value)))
    }
    static getUser(){ 
        return JSON.parse(LocalStorage.getItem('user') ?? "{}")
    }
    
}