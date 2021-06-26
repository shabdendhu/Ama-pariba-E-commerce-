const get_env_configs = () => {
    if (window.location.hostname === "localhost") {
      return {
        // graphql_endpoint: "https://amapariba-backend.herokuapp.com/api"
        graphql_endpoint: "http://localhost:9000/api"
      };
    } else {
      return {
        graphql_endpoint: "https://amapariba-backend.herokuapp.com/api"
      };
    }
  };
  export const { graphql_endpoint } = get_env_configs();
  