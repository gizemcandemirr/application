import { TextInput, Text, View, Button, Alert } from "react-native";
import { useForm, useController } from "react-hook-form";
import cn from "classnames";

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

function LoginPage() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => Alert.alert(JSON.stringify(data));

  return (
    <View>
      <View className="flex flex-row justify-between mx-4 my-4">
        <Text className="text-lg font-semibold">Login</Text>
        <View className="flex flex-col">
          {errors.name && (
            <Text className="text-red-500">* Name is required</Text>
          )}
          {errors.email && (
            <Text className="text-red-500">* Email is required</Text>
          )}
        </View>
      </View>

      <Text className="mx-4">Name</Text>
      <Input
        {...register("name", { required: true })}
        control={control}
        errors={errors}
      />

      <Text className="mx-4">Email</Text>
      <Input
        {...register("email", { required: true })}
        control={control}
        errors={errors}
      />
      <View className="border-2 border-gray-800 text-gray-800 rounded-xl mx-4 my-4 flex flex-row justify-center items-center">
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
}

export default LoginPage;
