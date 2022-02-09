from functools import reduce

mounth_value = [200, 150, 356, 1800, 20, 10.50, 2, 4500]

# taxa_aplicada = map(lambda value: value - 10, mounth_value)

# valores_filtrados = filter(lambda value: value > 300, taxa_aplicada)

# valor_somado = reduce(lambda x, y: x + y, valores_filtrados)

valor_somado = reduce(
    lambda x, y: x + y,
    filter(
        lambda value: value > 300, map(lambda value: value - 10, mounth_value)
    ),
)

print(valor_somado)
