import { TextInput, Text, View, Button, Image } from "react-native";
import { useForm, useController } from "react-hook-form";
import cn from "classnames";
import { useLoginUserMutation } from "../hooks/apiSlice";

const Input = ({ name, control, errors }) => {
  const { field } = useController({ control, name, errors });

  return (
    <View
      className={cn("border-2 my-4 mx-4 border-gray-300 p-4 rounded-xl", {
        "border-red-500": !field.value,
      })}
    >
      <TextInput value={field.value} onChangeText={field.onChange} />
    </View>
  );
};

const Login = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const [loginUser, { isSuccess }] = useLoginUserMutation();

  const onSubmit = (data) => loginUser(data);

  return (
    <View>
      <View className="flex flex-row justify-between mx-4 my-4">
        <View className="flex flex-col">
          {errors.username && (
            <Text className="text-red-500">* Name is required</Text>
          )}
          {errors.password && (
            <Text className="text-red-500">* Email is required</Text>
          )}
        </View>
      </View>

      <View className="flex flex-row justify-center items-center">
        <Image source={"/login.png"} />
      </View>
      <View className="flex flex-row justify-center items-center">
        <Image source={"/logo.png"} />
      </View>
      <View>
        <Input
          {...register("username", { required: true })}
          control={control}
          placeholder="Kullanıcı Adı"
          errors={errors}
        />

        <Input
          {...register("password", { required: true })}
          type="password"
          control={control}
          placeholder="Şifre"
          errors={errors}
        />
        <View className="flex flex-row justify-between">
          <Button>Şifremi Unuttum</Button>
        </View>
      </View>

      <View className="border-2 bg-blue-600 text-white rounded-xl mx-4 my-4 flex flex-row justify-center items-center">
        <Button title="Giriş Yap" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

export default Login;
