import "./App.scss";
import { Controller, useForm } from "react-hook-form";
import { ReactComponent as SolidLinesIcon } from "./assets/icons/solid_lines.svg";
import { ReactComponent as Logo } from "./assets/icons/logo.svg";
import CardInput from "./components/ChipInput";
import Input from "./components/Input";
import SelectInput from "./components/Select";

function App() {
  const { handleSubmit, control } = useForm({
    mode: "onChange",
    defaultValues: {
      companyName: "",
      siteUrl: "",
      industry: "",
      companySize: "",
    },
  });

  const companySizeOptions = [
    {
      label: "1-20",
      value: "1-20",
    },
    {
      label: "21-50",
      value: "21-50",
    },
    {
      label: "51-201",
      value: "51-201",
    },

    {
      label: "201-500",
      value: "201-500",
    },
    {
      label: "500+",
      value: "500+",
    },
  ];

  const industryOptions = [
    {
      label: "Accounting",
      value: "Accounting",
    },
    {
      label: "Advertising",
      value: "Advertising",
    },
    {
      label: "Aerospace",
      value: "Aerospace",
    },
  ];

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="App">
      <Logo className="App_logo" />
      <form onSubmit={handleSubmit(onSubmit)} className="App_home">
        <div className="App_home_heading">
          <SolidLinesIcon
            className="App_home_heading_icon"
            style={{ height: 48, width: 51 }}
          />
        </div>

        <div className="App_home_content">
          <div className="header">
            <h1 className="title">
              It’s a delight to have you <br />
              onboard
            </h1>
            <h2 className="subTitle">
              Help us know you better. <br />
              (This is how we optimize Wobot as per your business needs)
            </h2>
          </div>

          <div className="body">
            <Controller
              render={({ field, fieldState: { error } }) => (
                <Input
                  name="companyName"
                  label="Company Name"
                  placeholder="e.g. Example Inc"
                  error={error?.message}
                  {...field}
                />
              )}
              control={control}
              name="companyName"
              rules={{ required: "Please enter your Company Name" }}
            />
            <Controller
              render={({ field, fieldState: { error } }) => (
                <Input
                  name="siteUrl"
                  label="Website URL"
                  placeholder="Example"
                  error={error?.message}
                  isOptional
                  leftDefault="www.wobot.ai/"
                  {...field}
                />
              )}
              control={control}
              name="siteUrl"
            />
            <Controller
              render={({ field, fieldState: { error } }) => (
                <SelectInput
                  name="industry"
                  label="Industry"
                  placeholder="Select"
                  options={industryOptions}
                  error={error?.message}
                  {...field}
                />
              )}
              control={control}
              name="industry"
              rules={{ required: "Please enter your Industry" }}
            />

            <div className="chipInput-container">
              <p className="chip-label">Company size</p>
              <div className="options">
                {companySizeOptions.map(({ label, value }) => (
                  <Controller
                    key={value}
                    render={({ field, fieldState: { error } }) => (
                      <CardInput
                        name="companySize"
                        value={value}
                        onChange={field.onChange}
                        error={error?.message}
                        isActive={field.value === value}
                      >
                        <div className="chip">{label}</div>
                      </CardInput>
                    )}
                    control={control}
                    name="companySize"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <button className="App_home_submit" type="submit">
          Get started
        </button>
      </form>
      <div className="App_bg">
        <div className="App_bg_child-1"></div>
        <div className="App_bg_child-2"></div>
      </div>
    </div>
  );
}

export default App;
