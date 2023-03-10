class AnimalSerializer < ActiveModel::Serializer
  attributes :id, :name, :nombre, :image, :threatened
end
