// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// const apiURL = "http://127.0.0.1:8000/api/";

// const StatusCode = {
//   Unauthorized: 401,
//   Forbidden: 403,
//   TooManyRequests: 429,
//   InternalServerError: 500,
//   ServerNotFound: undefined,
// }

// const headers: Readonly<Record<string, string | boolean>> = {
//   Accept: "application/json",
//   "Content-type": "application/json; charset=utf-8",
//   // "Access-Control-Allow-Credentials": true,
//   // "X-Requested-With": "XMLHttpRequest",
// };

// const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
//   try {
//     const token = localStorage.getItem("accessToken");

//     if (token != null && config !== "undefined") {
//       config.headers.Authorization = `Bearer ${token}`; //todo: fix undefined types
//     }
//     return config;

//   } catch(e: any) {
//     // let msg;
//     // if (e instanceof Error) msg = e.message;
//     // return genericErrorMessage({m:sg});
//     throw new Error(e);
//   }
// };

// class Http {
//   private instance: AxiosInstance | null = null;

//   private get http(): AxiosInstance {
//     return this.instance ?? this.initHttp();
//   }

//   initHttp() {
//     const http = axios.create({
//       baseURL: apiURL,
//       headers,
//       // withCredentials: true,
//     });

//     // http.interceptors.request.use(injectToken, (error) => Promise.reject(error));

//     http.interceptors.response.use(
//       (response) => response,
//       (error) => {
//         const { response } = error;
//         return this.handleError(response);
//       }
//     );

//     this.instance = http;
//     return http;
//   }
    
//   request<T=any, R=AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
//     return this.http.request(config);
//   }

//   get<T=any, R=AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
//     return this.http.get<T,R>(url,config);
//   }

//   post<T=any, R=AxiosResponse<T>>(
//     url: string,
//     data?: T,
//     config?: AxiosRequestConfig
//   ): Promise<R> {
//     return this.http.post<T,R>(url, data, config);
//   }
    
//   put<T=any, R=AxiosResponse<T>>(
//     url: string,
//     data?: T,
//     config?: AxiosRequestConfig
//   ): Promise<R> {
//     return this.http.put<T,R>(url, data, config);
//   }

//   delete<T=any, R=AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
//     return this.http.delete<T,R>(url, config);
//   }

//   private handleError(e: any) {
//     const { status } = e ?? '';

//     switch (status) {
//     case StatusCode.InternalServerError: {
//       break;
//     }
//     case StatusCode.Forbidden: {
//       break;
//     }
//     case StatusCode.Unauthorized: {
//       break;
//     }
//     case StatusCode.TooManyRequests: {
//       break;
//     }
//     case StatusCode.ServerNotFound: {
//       throw new Error("Server is not found");
//     }
//     default: {
//       throw new Error("Something unexpected happened!");
//     } 
//     }

//     return Promise.reject(e);
//   }
// }

// export const http = new Http();



