import {Mutation} from 

const MUTATION = gql`
  mutation($file: Upload!) {
    uploadFile(file: $file) {
      success
    }
  }
`;

const UploadFile = () => {
  const [mutate] = useMutation(MUTATION);
  const onChange = ({
    target: {
      validity,
      files: [file]
    }
  }) => validity.valid && mutate({ variables: { file } });

  return <input type="file" required onChange={onChange} />;
};

export default UploadFile