import { TextInput, Text, View, Button, Alert } from "react-native";
import { useForm, useController } from "react-hook-form";
import cn from "classnames";
import { useLoginUserMutation } from "../hooks/apiSlice";

const Input = ({ name, control, errors }) => {
  const { field } = useController({ control, name, errors });

  return (
    <View
      className={cn("border-2 my-4 mx-4 border-gray-500 p-4 rounded-xl", {
        "border-red-500": !field.value,
      })}
    >
      <TextInput value={field.value} onChangeText={field.onChange} />
    </View>
  );
};

function Login() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [loginUser, { isSuccess }] = useLoginUserMutation({
    onSuccess: () => {
      Alert.alert("Giriş yapıldı");
    },
  });

  const onSubmit = (data) => loginUser(data);

  return (
    <View>
      <View className="flex flex-row justify-between mx-4 my-4">
        <Text className="text-lg font-semibold">Login</Text>
        <View className="flex flex-col">
          {errors.username && (
            <Text className="text-red-500">* Name is required</Text>
          )}
          {errors.password && (
            <Text className="text-red-500">* Email is required</Text>
          )}
        </View>
      </View>

      <Text className="mx-4">Email {isSuccess ? "başarılı" : "değil"}</Text>
      <Input
        {...register("username", { required: true })}
        control={control}
        errors={errors}
      />

      <Text className="mx-4">Password</Text>
      <Input
        {...register("password", { required: true })}
        control={control}
        errors={errors}
      />
      <View className="border-2 border-gray-800 text-gray-800 rounded-xl mx-4 my-4 flex flex-row justify-center items-center">
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

export default Login;
