ActiveAdmin.register Collection do
  permit_params :name, :year

  form do |f|
    f.input :name
    f.input :year
  end
end
