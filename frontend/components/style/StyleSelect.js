import { Query } from "./node_modules/react-apollo";
import gql from "./node_modules/graphql-tag";

const ALL_STYLES_QUERY = gql`
  query ALL_STYLE_QUERY {
    styles {
      id
      name
    }
  }
`;

const StyleSelect = props => {
  const { value, onChange } = props;
  return (
    <Query query={ALL_STYLES_QUERY}>
      {({ data, loading, error }) => {
        return (
          <label htmlFor="style">
            Style
            <select id="style" name="style" value={value} onChange={onChange}>
              <option value="">None</option>
              {data.styles.map(style => (
                <option key={style.id} value={style.id}>
                  {style.name}
                </option>
              ))}
            </select>
          </label>
        );
      }}
    </Query>
  );
};

export default StyleSelect;
