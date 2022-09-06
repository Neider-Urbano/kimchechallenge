import { gql } from "@apollo/client";

export default function LIST_COUNTRIES(){
    return gql`
    {
    countries {
        name
        phone
        emoji
        capital
        continent{
        name
        }
        languages {
        name
        }
    }
    }
`;
}