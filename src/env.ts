type Env = {
    REACT_APP_ADMIN_TOKEN
    REACT_APP_ADMIN
    REACT_APP_MEDIA
    REACT_APP_API
}

const defaltEnv: Env = {
    REACT_APP_ADMIN_TOKEN: "123456",
    REACT_APP_ADMIN: "http://192.168.0.108:1337",
    REACT_APP_MEDIA: "http://192.168.0.108:1337/uploads",
    REACT_APP_API: "http://192.168.0.108:1337/api"
} as const

process.env = {...defaltEnv, ...process.env}

export default process.env
