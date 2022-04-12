export interface PostPropsType {
    r_code: number,
    restaurant_name: string;
    img: string;
    address: string;
    star: number;
    options: {
        takeout: boolean;
        parking: boolean;
        pet: boolean;
        nokids: boolean;
  }
  }

  export interface MypageCategoryType {
    category : string,
    setCategory :Function
  }

  export interface FavoritePropsType {
    nickname: string,
        like_list: [
          {
            r_code:number,
            restaurant_name: string,
            img: string,
            address: string,
            star: number,
            options: {
              takeout: boolean,
              parking: boolean,
              pet: boolean,
              nokids: boolean,
            },
          },
        ]
  }

  export interface SetUser {
    id:string,
    pw:string,
  }
  
  export interface Signup {
    id:string,
    pw:string,
    nickname:string
  }

  