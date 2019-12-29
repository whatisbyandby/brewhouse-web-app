import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import Error from "../ErrorMessage";
import Table from "../component-styles/Table";

const possiblePermissions = [
  "ADMIN",
  "USER",
  "ITEMCREATE",
  "ITEMUPDATE",
  "ITEMDELETE",
  "PERMISSIONUPDATE"
];

const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const UPDATE_PERMISSIONS_MUTATION = gql`
  mutation UPDATE_PERMISSIONS_MUTATION(
    $permissions: [Permission]!
    $userId: ID!
  ) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      name
      email
      permissions
    }
  }
`;

const Permissions = props => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, loading, error }) => {
      {
        if (loading) {
          return <h2>Loading....</h2>;
        }
      }
      return (
        <div>
          <Error error={error} />
          <Table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                {possiblePermissions.map(permission => (
                  <th key={permission}>{permission}</th>
                ))}
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.users.map(user => (
                <UserPermissions key={user.id} user={user} />
              ))}
            </tbody>
          </Table>
        </div>
      );
    }}
  </Query>
);

class UserPermissions extends React.Component {
  state = {
    permissions: this.props.user.permissions
  };

  handleCheckboxChange = (event, updatePermissionsMutation) => {
    const checkbox = event.target;
    let updatedPermissions = [...this.state.permissions];
    if (checkbox.checked) {
      updatedPermissions.push(checkbox.value);
    } else {
      updatedPermissions = updatedPermissions.filter(
        permission => permission !== checkbox.value
      );
    }
    this.setState({ permissions: updatedPermissions }, () =>
      updatePermissionsMutation({
        variables: {
          permissions: this.state.permissions,
          userId: this.props.user.id
        }
      })
    );
  };

  render() {
    const { user } = this.props;
    return (
      <Mutation mutation={UPDATE_PERMISSIONS_MUTATION}>
        {(updatePermissionsMutation, { error }) => (
          <tr>
            <Error error={error} />
            <td>{user.name}</td>
            <td>{user.email}</td>
            {possiblePermissions.map(permission => (
              <td key={`${user.id}-${permission}`}>
                <label htmlFor={`${user.id}-permission-${permission}`}>
                  <input
                    type="checkbox"
                    id={`${user.id}-permission-${permission}`}
                    checked={this.state.permissions.includes(permission)}
                    value={permission}
                    onChange={event =>
                      this.handleCheckboxChange(
                        event,
                        updatePermissionsMutation
                      )
                    }
                  />
                </label>
              </td>
            ))}
            <td>
              <button
                onClick={() => {
                  console.log(this.state.permissions);
                  updatePermissionsMutation({
                    variables: {
                      permissions: this.state.permissions,
                      userId: this.props.user.id
                    }
                  });
                }}
              >
                Update
              </button>
            </td>
          </tr>
        )}
      </Mutation>
    );
  }
}

export default Permissions;
