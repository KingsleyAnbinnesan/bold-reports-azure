ej.ReportDesigner.Locale['es-ES'] = {
    itemPanel: {
        waterMarkText: 'Buscar widgets',
        noDataFound: 'No se encontraron coincidencias...',
        customCategory: 'Códigos de barras',
        dataRequirements: 'Requisitos de datos',
        customRptItemName: 'Código de barra 1D',
        labelText: 'Contenedor de panel de elementos',
        expandText: 'Expandir',
        collapseText: 'Contraer',
        customTooltip: {
            tooltip: {
                requirements: 'Añadir elemento de informe al área de diseño.',
                description: 'Muestra elemento de informe personalizado.',
                title: 'Elemento de informe personalizado'
            }
        },
        groupItems: {
            basicItems: {
                groupName: 'Elementos básicos',
                Items: {
                    'line': {
                        displayText: 'Línea',
                        tooltip: {
                            requirements: 'Para separar una región a través de una línea en las secciones del informe.',
                            description: 'Elemento gráfico para separar la región del informe.',
                            title: 'Línea'
                        }
                    },
                    'image': {
                        displayText: 'Imagen',
                        tooltip: {
                            requirements: 'Para mostrar una imagen de la base de datos, insertar la imagen.',
                            description: 'Muestra las imágenes.',
                            title: 'Imagen'
                        }
                    },
                    'textBox': {
                        displayText: 'Cuadro de texto',
                        tooltip: {
                            requirements: 'Añadir cualquier texto.',
                            description: 'Muestra un texto estático y dinámico.',
                            title: 'Cuadro de texto'
                        }
                    },
                    'rectangle': {
                        displayText: 'Rectángulo',
                        tooltip: {
                            requirements: 'Combinar uno o más elementos de informe en su interior.',
                            description: 'Elemento contenedor de gráfico.',
                            title: 'Rectángulo'
                        }
                    }
                }
            },
            comparison: {
                groupName: 'Comparación',
                Items: {
                    'column': {
                        displayText: 'Columna',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Compara los valores de un conjunto de elementos no ordenados en varias categorías utilizando las barras verticales dispuestas horizontalmente.',
                            title: 'Columna'
                        }
                    },
                    'bar': {
                        displayText: 'Barra',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Compara los valores de un conjunto de elementos no ordenados en varias categorías utilizando las barras horizontales dispuestas verticalmente.',
                            title: 'Barra'
                        }
                    },
                    'stackedColumn': {
                        displayText: 'Columna apilada',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Compara varias medidas utilizando las barras apiladas verticalmente.',
                            title: 'Columna apilada'
                        }
                    },
                    'stackedBar': {
                        displayText: 'Barra apilada',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Compara varias medidas utilizando las barras apiladas horizontalmente.',
                            title: 'Barra apilada'
                        }
                    },
                    'rangeColumn': {
                        displayText: 'Columna de rango',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Muestra un intervalo de datos trazando dos valores y por punto de datos.',
                            title: 'Columna de rango'
                        }
                    },
                    'rangeBar': {
                        displayText: 'Barra de rango',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Muestra un rango de datos trazando horizontalmente dos valores y por punto de datos.',
                            title: 'Barra de rango'
                        }
                    },
                    'stackedColumnPercent': {
                        displayText: 'Columna apilada al 100%',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Compara varias medidas como partes de un todo utilizando las barras apiladas verticalmente.',
                            title: 'Columna apilada al 100%'
                        }
                    },
                    'stackedBarPercent': {
                        displayText: 'Barra apilada al 100%',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Compara varias medidas como partes de un todo utilizando las barras apiladas horizontalmente.',
                            title: 'Barra apilada al 100%'
                        }
                    }
                }
            },
            kpi: {
                groupName: 'KPI',
                Items: {
                    'databar': {
                        displayText: 'Barra de datos',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Representa varios puntos de datos, pero normalmente sólo ilustra uno; se utiliza a menudo en tablas y matrices.',
                            title: 'Barra de datos'
                        }
                    },
                    'sparkline': {
                        displayText: 'Minigráfico',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Presenta múltiples puntos de datos y sus variaciones de forma muy condensada, a menudo se utiliza en tablas y matrices.',
                            title: 'Minigráfico'
                        }
                    },
                    'indicator': {
                        displayText: 'Indicador',
                        tooltip: {
                            requirements: '1 valor.',
                            description: 'Representación mínima de indicadores que visualizan el estado de un solo dato.',
                            title: 'Indicador'
                        }
                    }
                }
            },
            gauge: {
                groupName: 'Desviación',
                Items: {
                    'radialgauge': {
                        displayText: 'Medidor radial',
                        tooltip: {
                            requirements: '1 valor y 0 o 1 valor de inicio/fin.',
                            description: 'Visualiza las tendencias a través de indicadores clave de rendimiento como valores y objetivos.',
                            title: 'Medidor radial'
                        }
                    },
                    'lineargauge': {
                        displayText: 'Medidor linear',
                        tooltip: {
                            requirements: '1 valor y 0 o 1 valor de inicio/fin.',
                            description: 'Visualiza tendencias a través de indicadores clave de rendimiento como valores y objetivos. Suelen utilizarse en tablas y matrices.',
                            title: 'Medidor linear'
                        }
                    }
                }
            },
            proportion: {
                groupName: 'Proporción',
                Items: {
                    'pie': {
                        displayText: 'Circular',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Muestra las proporciones de la contribución de cada elemento al total en forma de círculo con sectores.',
                            title: 'Circular'
                        }
                    },
                    'explodedPie': {
                        displayText: 'Circular seccionado',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Destaca una porción individual de un gráfico circular.',
                            title: 'Circular seccionado'
                        }
                    },
                    'doughnut': {
                        displayText: 'Anillo',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Muestra las proporciones de la contribución de cada elemento al total en forma de rodajas de anillos.',
                            title: 'Anillo'
                        }
                    },
                    'pyramid': {
                        displayText: 'Pirámide',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Muestra la comparación proporcional entre valores de forma progresiva.',
                            title: 'Pirámide'
                        }
                    },
                    'funnel': {
                        displayText: 'Embudo',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Muestra la comparación proporcional entre valores de forma progresivamente decreciente.',
                            title: 'Embudo'
                        }
                    }
                }
            },
            distribution: {
                groupName: 'Distribución',
                Items: {
                    'area': {
                        displayText: 'Área',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Compara los valores de un conjunto de elementos no ordenados a través de varias categorías mediante las curvas rellenas ordenadas verticalmente.',
                            title: 'Área'
                        }
                    },
                    'smoothArea': {
                        displayText: 'Área suavizada',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Compara los valores de un conjunto de elementos no ordenados en varias categorías a través de las curvas rellenas ordenadas verticalmente con superficie lisa.',
                            title: 'Área suavizada'
                        }
                    },
                    'stackedArea': {
                        displayText: 'Área apilada',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Compara los valores de un conjunto de elementos no ordenados en varias categorías a través de las curvas rellenas ordenadas verticalmente con superficie lisa.',
                            title: 'Área apilada'
                        }
                    },
                    'stackedAreaPercent': {
                        displayText: 'Área apilada al 100%',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Compara varias medidas como partes de un todo a través de las curvas rellenas apiladas verticalmente.',
                            title: 'Área apilada al 100%'
                        }
                    },
                    'line': {
                        displayText: 'Línea',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Muestra las tendencias de análisis a lo largo de un tiempo con puntos de datos conectados mediante líneas rectas.',
                            title: 'Línea'
                        }
                    },
                    'smoothLine': {
                        displayText: 'Línea suavizada',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Compara la distribución de valores a lo largo de un periodo de tiempo conectado mediante las líneas lisas.',
                            title: 'Línea suavizada'
                        }
                    },
                    'steppedLine': {
                        displayText: 'Línea escalonada',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Compara la distribución de valores a lo largo de un periodo de tiempo conectado mediante las líneas escalonadas.',
                            title: 'Línea escalonada'
                        }
                    },
                    'lineWithMarkers': {
                        displayText: 'Línea con marcadores',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Compara los cambios durante el mismo periodo de tiempo para más de un grupo.',
                            title: 'Línea con marcadores'
                        }
                    },
                    'smoothLineWithMarkers': {
                        displayText: 'Línea suavizada con marcadores',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Los valores trazados se representan con un punto marcador y esos puntos se conectan mediante una línea suavizada.',
                            title: 'Línea suavizada con marcadores'
                        }
                    },
                    'scatter': {
                        displayText: 'Dispersión',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Muestra una serie como un conjunto de puntos y los valores se representan mediante la posición de los puntos en el gráfico.',
                            title: 'Dispersión'
                        }
                    },
                    'bubble': {
                        displayText: 'Burbuja',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Muestra la diferencia entre dos valores de un punto de datos en función del tamaño de la burbuja.',
                            title: 'Burbuja'
                        }
                    },
                    'polar': {
                        displayText: 'Polar',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Muestra una serie como un conjunto de puntos agrupados por categorías en un círculo de 360 grados.',
                            title: 'Polar'
                        }
                    },
                    'radar': {
                        displayText: 'Radar',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Muestra una serie como una línea o área circular.',
                            title: 'Radar'
                        }
                    },
                    'rangeArea': {
                        displayText: 'Área de rango',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Tipo de gráfico de áreas en el que, en lugar de empezar en el eje, el área se representa por el espacio entre dos valores.',
                            title: 'Área de rango'
                        }
                    },
                    'smoothRangeArea': {
                        displayText: 'Área de rango lisa',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más columnas.',
                            description: 'Líneas curvas para conectar puntos de datos en lugar de rectas.',
                            title: 'Área de rango lisa'
                        }
                    }
                }
            },
            dataRegions: {
                groupName: 'Regiones de datos',
                Items: {
                    'tablix': {
                        displayText: 'Tabla',
                        tooltip: {
                            requirements: '1 o más filas/columnas.',
                            description: 'Muestra los datos paginados en formato tabular.',
                            title: 'Tabla'
                        }
                    },
                    'list': {
                        displayText: 'Lista',
                        tooltip: {
                            requirements: '1 o más filas/columnas.',
                            description: 'Una lista muestra datos en formato libre. Coloca los campos en cualquier lugar de la lista.',
                            title: 'Lista'
                        }
                    },
                    'matrix': {
                        displayText: 'Matriz',
                        tooltip: {
                            requirements: '1 o más valores y 1 o más filas/columnas.',
                            description: 'Muestra datos resumidos en formato de tabla cruzada.',
                            title: 'Matriz'
                        }
                    }
                }
            },
            maps: {
                groupName: 'Mapa',
                Items: {
                    'map': {
                        displayText: 'Mapa',
                        tooltip: {
                            requirements: 'Mostrar un mapa del informe.',
                            description: 'Muestra los datos analíticos sobre un fondo geográfico.',
                            title: 'Mapa'
                        }
                    }
                }
            },
            subReports: {
                groupName: 'Subinformes',
                Items: {
                    'subreport': {
                        displayText: 'Subinforme',
                        tooltip: {
                            requirements: 'Mostrar/incorporar el informe en el informe principal.',
                            description: 'Muestra otro informe en el cuerpo principal del informe.',
                            title: 'Subinforme'
                        }
                    }
                }
            }
        }
    },
    toolbar: {
        newReport: 'Nuevo',
        open: 'Abierto',
        openMenu: {
            fromDevice: 'Desde dispositivo',
            fromServer: 'Desde servidor',
        },
        save: 'Guardar',
        saveMenu: {
            saveLabel: 'Guardar',
            saveAs: 'Guardar como',
            subMenu: {
                toDevice: 'A dispositivo',
                toServer: 'A servidor'
            }
        },
        cut: 'Cortar',
        copy: 'Copiar',
        paste: 'Pegar',
        deleteItem: 'Eliminar',
        undo: 'Deshacer',
        redo: 'Rehacer',
        zoomIn: 'Acercar',
        zoomOut: 'Alejar',
        header: 'Encabezado',
        footer: 'Pie de página',
        order: 'Ordenar',
        orderMenu: {
            sendBackward: 'Enviar atrás',
            bringForward: 'Traer adelante',
            sendToBack: 'Enviar al fondo',
            bringToFront: 'Traer al frente'
        },
        left: 'Alinear a la izquierda',
        center: 'Centrar',
        right: 'Alinear a la derecha',
        top: 'Alinear arriba',
        middle: 'Alinear en el medio',
        bottom: 'Alinear abajo',
        distributeHorizontally: 'Distribuir horizontalmente',
        distributeVertically: 'Distribuir verticalmente',
        centerHorizontally: 'Centrar horizontalmente',
        centerVertically: 'Centrar verticalmente',
        sizing: 'Tamaño',
        sizingMenu: {
            sameSize: 'Mismo tamaño',
            sameWidth: 'Mismo ancho',
            sameHeight: 'Mismo alto'
        },
        alignToGrid: 'Alinear a cuadrícula',
        sizeToGrid: 'Ordenar a cuadrícula',
        gridLine: 'Líneas de la cuadrícula',
        snapToShape: 'Ajustar a la forma',
        fullScreen: 'Pantalla completa',
        preview: 'Vista preliminar',
        reportUpload: {
            alertLabel: 'Cargar',
            alertMessage: 'Error cargando archivo. Por favor, cargar nuevamente'
        },
        grouping: 'Agrupamiento',
        view: 'Vista'
    },
    newReport: {
        title: 'Nuevo informe',
        fileName: 'Nombre de archivo',
        waterMark: 'Nombre de informe',
        create: 'Crear',
        cancel: 'Cancelar',
        close: 'Cerrar',
    },
    reportAction: {
        linkTo: 'Vincular a',
        report: 'Informe',
        url: 'URL',
        linkUrl: 'Vincular url a elemento del informe',
        none: 'Ninguno',
        linkBookmark: 'Marcador'
    },
    linkReport: {
        reportCaption: 'Informe',
        labelText: 'Vincular el subinforme al elemento del informe',
        reportDialog: 'Abrir diálogo de informe',
        setParameter: 'Establecer parámetros',
        dialogHeader: 'Diseñador de informe',
        alertContent: 'No se puede acceder a los informes del servidor.'
    },
    imageProperty: {
        basicSettings: {
            categoryName: 'Ajustes básicos',
            source: 'Fuente',
            sourceTypes: {
                external: 'Externo',
                embedded: 'Insertado',
                database: 'Base de datos'
            },
            value: 'Valor',
            mimeType: 'Tipo MIME',
            mimeTypes: {
                bmp: 'imagen/bmp',
                jpeg: 'imagen/jpeg',
                gif: 'imagen/gif',
                png: 'imagen/png',
                xPng: 'imagen/x-png'
            }
        },
        categoryName: 'Vínculo',
        linkReport: 'Vincular informe',
        URL: 'URL',
        appearance: {
            categoryName: 'Apariencia',
            styleTooltip: 'Estilo',
            colorTooltip: 'Color',
            sizeTooltip: 'Tamaño',
            borderTypes: {
                default: 'Borde',
                left: 'Izquierda',
                top: 'Superior',
                right: 'Derecha',
                bottom: 'Inferior'
            },
            borderStyles: {
                solid: 'Sólido',
                none: 'Ninguno',
                double: 'Doble',
                dashed: 'Guiones',
                dotted: 'Puntos'
            },
            borderProperties: {
                defaultColor: 'Color de borde',
                defaultSize: 'Tamaño de borde',
                defaultStyle: 'Estilo de borde',
                leftColor: 'Color de borde izquierdo',
                leftSize: 'Tamaño de borde izquierdo',
                leftStyle: 'Estilo de borde izquierdo',
                topColor: 'Color de borde superior',
                topSize: 'Tamaño de borde superior',
                topStyle: 'Estilo de borde superior',
                rightColor: 'Color de borde derecho',
                rightSize: 'Tamaño de borde derecho',
                rightStyle: 'Estilo de borde derecho',
                bottomColor: 'Color de borde inferior',
                bottomSize: 'Tamaño de borde inferior',
                bottomStyle: 'Estilo de borde inferior'
            }
        },
        size: {
            categoryName: 'Tamaño',
            paddingTypes: {
                label: 'Relleno',
                left: 'Izquierda',
                top: 'Superior',
                right: 'Derecha',
                bottom: 'Inferior'
            },
            sizing: 'Tamaño',
            sizeTypes: {
                auto: 'Autoajustar',
                fit: 'Ajustado',
                proportional: 'Ajuste proporcional',
                clip: 'Clip'
            }
        },
        position: {
            categoryName: 'Posición',
            label: 'Posición',
            left: 'Izquierda',
            top: 'Superior',
            sizeLabel: 'Tamaño',
            width: 'Ancho',
            height: 'Alto'
        },
        visibility: {
            categoryName: 'Visibilidad',
            hidden: 'Oculto',
            toggleItem: 'Alternar elemento'
        },
        miscellaneous: {
            categoryName: 'Misceláneo',
            customAttributes: 'Atributos personalizados',
            toolTip: 'Información sobre herramientas',
            documentMap: 'Mapa de documento',
            zIndex: 'Índice Z',
            bookmark: 'Marcador'
        }
    },
    chartProperty: {
        commonProperties: {
            showBorder: 'Mostrar borde',
            border: {
                default: 'Borde',
                left: 'Izquierdo',
                top: 'Superior',
                right: 'Derecho',
                bottom: 'Inferior'
            },
            background: 'Color de fondo',
            font: 'Fuente',
            fontStyle: 'Estilo de fuente',
            labelRotation: 'Rotación de etiqueta',
            categoryAxis: 'Eje de categoría',
            valueAxis: 'Eje de valor',
            defaultText: 'Predeterminado',
            auto: 'Automático',
            borderStyles: {
                solid: 'Sólido',
                none: 'Ninguno',
                double: 'Doble',
                dashed: 'Guiones',
                dotted: 'Puntos',
                dashDot: 'Guiones y puntos',
                dashDotDot: 'Guion-punto-punto'
            },
            borderProperties: {
                defaultColor: 'Color de borde',
                defaultSize: 'Tamaño de borde',
                defaultStyle: 'Estilo de borde',
                leftColor: 'Color de borde izquierdo',
                leftSize: 'Tamaño de borde izquierdo',
                leftStyle: 'Estilo de borde izquierdo',
                topColor: 'Color de borde superior',
                topSize: 'Tamaño de borde superior',
                topStyle: 'Estilo de borde superior',
                rightColor: 'Color de borde derecho',
                rightSize: 'Tamaño de borde derecho',
                rightStyle: 'Estilo de borde derecho',
                bottomColor: 'Color de borde inferior',
                bottomSize: 'Tamaño de borde inferior',
                bottomStyle: 'Estilo de borde inferior'
            },
            horizontalAlignments: {
                near: 'Cerca',
                far: 'Lejos',
            },
            textAlignments: {
                right: 'Derecho',
                bottom: 'Inferior',
                center: 'Centro',
                topLeft: 'Superior izquierda',
                topCenter: 'Superior central',
                topRight: 'Superior derecha',
                rightTop: 'Derecha superior',
                rightCenter: 'Derecha central',
                rightBottom: 'Derecha inferior',
                bottomLeft: 'Inferior izquierda',
                bottomCenter: 'Inferior central',
                bottomRight: 'Inferior derecha',
                leftTop: 'Izquierda superior',
                leftCenter: 'Izquierda central',
                leftBottom: 'Izquierda inferior',
            },
            fontStyleTypes: {
                normal: 'Normal',
                italic: 'Italic'
            },
            fontWeightTypes: {
                light: 'Ligera',
                bold: 'Negrita'
            }
        },
        noDataMessage: {
            categoryName: 'No hay datos',
            caption: 'Mensaje',
            hidden: 'Ocultar no hay datos',
            showBorder: 'Mostrar borde',
            borderColor: 'Color de borde',
            borderSize: 'Tamaño de borde',
            fontLabel: 'Fuente',
            background: 'Color de fondo',
            position: 'Posición',
            font: {
                categoryName: 'Fuente',
                color: 'Color de fuente',
                family: 'Familia de fuente',
                size: 'Tamaño de fuente',
                style: 'Estilo de fuente',
                weight: 'Ancho de fuente'
            },
            fontStyle: {
                label: 'Estilo de fuente',
                fontItem: {
                    default: 'Predeterminado',
                    normal: 'Normal',
                    italic: 'Italic'
                },
                fontWeight: {
                    default: 'Predeterminado',
                    normal: 'Normal',
                    thin: 'Delgada',
                    extraLight: 'Extraligera',
                    light: 'Ligera',
                    medium: 'Medio',
                    semiBold: 'Seminegrita',
                    bold: 'Negrita',
                    extraBold: 'Extranegrita',
                    heavy: 'Fuerte',
                }
            }
        },
        basicSettings: {
            categoryName: 'Ajustes básicos',
            chartType: {
                categoryName: 'Tipo de gráfico',
                column: 'Columna',
                stackedColumn: 'Columna apilada',
                stackedColumnPercent: 'Columna apilada al 100%',
                bar: 'Barra',
                stackedBar: 'Barra apilada',
                stackedBarPercent: 'Barra apilada al 100%',
                pie: 'Circular',
                explodedPie: 'Circular seccionado',
                doughnut: 'Anillo',
                pyramid: 'Pirámide',
                funnel: 'Embudo',
                area: 'Área',
                smoothArea: 'Área suavizada',
                stackedArea: 'Área apilada',
                stackedAreaPercent: 'Área apilada al 100%',
                line: 'Línea',
                smoothLine: 'Línea suavizada',
                steppedLine: 'Línea escalonada',
                lineWithMarkers: 'Línea con marcadores',
                smoothLineWithMarkers: 'Línea suavizada con marcadores',
                scatter: 'Dispersión',
                bubble: 'Burbuja',
                polar: 'Polar',
                radar: 'Radar',
                rangeArea: 'Área de rango',
                rangeColumn: 'Columna de rango',
                rangeBar: 'Barra de rango',
                smoothRangeArea: 'Área de rango lisa',
                alertSwitchChartType: 'Se cambiarán todos los tipos de serie. ¿Quieres continuar?'
            },
            legendProperties: {
                booleanPropertyLabel: 'Mostrar leyenda',
                title: 'Título',
                titleFont: 'Fuente de título',
                titleFontStyle: 'Estilo de fuente de título',
                titleAlignment: 'Alineamiento de título',
                position: 'Posición de leyenda',
                enableCustomBounds: 'Habilitar límites personalizados'
            },
            chooseSeries: 'Seleccionar series'
        },
        categoryName: 'Apariencia',
        chartArea: {
            categoryName: 'Área de gráfico',
            colorPalette: 'Paleta de color',
            colorPaletteTypes: {
                earthTones: 'Tonos tierra',
                excel: 'Excel',
                grayScale: 'Escala de grises',
                pastel: 'Pastel',
                semiTransparent: 'SemiTransparente',
                berry: 'Baya',
                chocolate: 'Chocolate',
                fire: 'Fuego',
                seaGreen: 'Verde marino',
                brightPastel: 'Pastel brillante',
                pacific: 'Pacífico',
                pacificLight: 'Luz pacífica',
                pacificSemiTransparent: 'Pacífico semitransparente',
                custom: 'Personalizado'
            },
            customColors: 'Colores personalizados'
        },
        forecast: {
            categoryName: 'Ajustes de pronóstico',
            enableSettings: 'Habilitar',
            forecastlength: 'Longitud (puntos)',
            confidenceInterval: 'Nivel de confianza',
            seasonality: 'Estacionalidad (puntos)',
            enableSeries: 'Pronóstico',
            forecastColor: 'Color de pronóstico',
            confidenceEnable: 'Confianza',
            confidenceColor: 'Color de confianza',
            bandStyle: 'Estilo de banda de confianza',
            confidenceBandTypes: {
                fill: 'Relleno',
                linetype: 'Línea',
                dot: 'Punto'
            }
        },
        title: {
            categoryName: 'Título',
            booleanPropertyLabel: 'Mostrar gráfico',
            label: 'Texto del título',
            position: 'Posición del título'
        },
        axis: {
            axisType: 'Tipo de eje',
            booleanPropertyLabel: 'Habilitar eje',
            title: 'Título del eje',
            alignment: 'Alineamiento',
            lineStyle: 'Estilo de línea',
            labelOverflowMode: 'Modo etiqueta de desbordamiento',
            overFlowModeTypes: {
                trim: 'Recortar',
                hide: 'Ocultar',
            },
            labelFont: 'Etiqueta de fuente',
            labelFormat: 'Etiqueta de formato',
            interval: 'Intervalo',
            intervalType: 'Tipo de intervalo',
            intervalTypes: {
                default: 'Predeterminado',
                number: 'Número',
                years: 'Años',
                months: 'Meses',
                days: 'Días',
                hours: 'Horas',
                minutes: 'Minutos',
                seconds: 'Segundos',
                milliseconds: 'Milisegundos',
                weeks: 'Semanas'
            },
            enableMajorTicks: 'Habilitar ticks mayores',
            enableMinorTicks: 'Habilitar ticks menores',
            tickProperties: {
                sizeLabel: 'Tamaño de tick',
                colorLabel: 'Color de tick',
                width: 'Ancho',
                length: 'Largo'
            },
            tickPosition: 'Posición del tick',
            lineProperties: {
                color: 'Color de línea',
                size: 'Tamaño de línea',
                style: 'Estilo de línea'
            },
            gridLineProperties: {
                color: 'Color de línea de cuadrícula',
                size: 'Tamaño de línea de cuadrícula',
                style: 'Estilo de línea de cuadrícula'
            },
            chartTicks: {
                length: 'Largo del tick',
                width: 'Ancho del tick'
            },
            labelsAutofitDisabled: 'Etiquetas autoajuste desactivado',
            margin: 'Margen',
            maximum: 'Máximo',
            minimum: 'Mínimo',
            horizontalAxis: 'Eje horizontal',
            verticalAxis: 'Eje vertical',
            includeZero: 'Incluir cero'
        },
        gridLine: {
            categoryName: 'Línea de cuadrícula',
            style: {
                booleanPropertyLabel: 'Mostrar línea de cuadrícula menor',
                major: 'Estilo de línea de cuadrícula mayor',
                minor: 'Estilo de línea de cuadrícula menor'
            }
        },
        pageBreak: {
            categoryName: 'Salto de página',
            booleanPropertyLabel: 'Habilitar salto de página',
            breakLocation: 'Ubicación de salto',
            breakLocationTypes: {
                none: 'Ninguno',
                start: 'Inicio',
                end: 'Fin',
                startAndEnd: 'Inicio y fin',
                between: 'Entre',
            },
            pageNumberReset: 'Reiniciar número de página',
            pageName: 'Nombre de página'
        },
        position: {
            categoryName: 'Posición',
            label: 'Posición',
            left: 'Izquierda',
            top: 'Superior',
            sizeLabel: 'Tamaño',
            width: 'Ancho',
            height: 'Alto'
        },
        visibility: {
            categoryName: 'Visibilidad',
            hidden: 'Oculto',
            toggleItem: 'Alternar elemento'
        },
        miscellaneous: {
            categoryName: 'Misceláneo',
            customAttributes: 'Atributos personalizados',
            toolTip: 'Información sobre herramientas',
            documentMap: 'Mapa de documento',
            alertHeader: 'Gráfico de elemento de informe',
            alertMessage: 'Formato de atributos personalizados no válido. Ejemplo de formato correcto: \'AttrName1= Value1, AttrName2 = Value2\'.',
            bookmark: 'Marcador'
        },
        dataLimit: {
            categoryName: 'Límite de datos de vista previa',
            maxDataCount: 'Recuento máximo de datos'
        },
        seriesSettings: {
            headerName: 'Propiedades de series',
            basicSettings: {
                categoryName: 'Ajustes básicos',
                seriesBorder: 'Borde de series',
                seriesColor: 'Color de series',
                smartLabelProperties: {
                    booleanPropertyLabel: 'Habilitar etiqueta inteligente',
                    labelStyle: 'Estilo de etiqueta',
                    value: 'Valor',
                    position: {
                        outside: 'Afuera',
                        inside: 'Adentro',
                        outsideInColumn: 'Fuera en columna'
                    },
                    style: {
                        pieLabelStyle: 'Estilo de etiqueta de circular',
                        funnelLabelStyle: 'Estilo de etiqueta de embudo',
                        pyramidLabelStyle: 'Estilo de etiqueta de pirámide',
                        barLabelStyle: 'Estilo de etiqueta de barra',
                        smartLabelStyle: 'Estilo de etiqueta de etiqueta inteligente'
                    }
                }
            },
            axisSettings: {
                categoryName: 'Configuración del eje',
                categoryAxis: 'Categoría',
                valueAxis: 'Valorr',
                axisTypes: {
                    primary: 'Primaria',
                    secondary: 'Secundaria'
                }
            },
            link: 'Vínculo',
            markerProperties: {
                categoryName: 'Ajustes de marcadores',
                booleanPropertyLabel: 'Mostrar marcador',
                color: 'Color',
                typePropertyLabel: 'Tipo de marcador',
                types: {
                    square: 'Cuadrado',
                    circle: 'Círculo',
                    diamond: 'Diamante',
                    triangle: 'Triángulo',
                    cross: 'Cruz',
                    star5: '5 Estrellas',
                },
                size: 'Tamaño'
            },
            dataLabelProperties: {
                categoryName: 'Ajustes de etiqueta de datos',
                booleanPropertyLabel: 'Mostrar etiqueta de datos',
                formatPropertyLabel: 'Formato',
                labelPropertyText: 'Etiqueta',
                valueAsText: 'Usar valor como etiqueta',
                types: {
                    valueX: '#VALX',
                    valueY: '#VALY',
                    valueY2: '#VALY2',
                    valueY3: '#VALY3',
                    valueY4: '#VALY4',
                    valueY5: '#VALY5',
                    valueY6: '#VALY6',
                    index: '#ÍNDICE',
                    percent: '#POR CIENTO',
                    total: '#TOTAL',
                    axisLabel: '#ETIQUETA DE EJE'
                }
            },
            miscellaneous: {
                categoryName: 'Misceláneo',
                toolTip: 'Información sobre herramientas',
                customLegendText: 'Texto de leyenda'
            }
        },
        borderStyle: 'Estilo de borde',
        borderColor: 'Color de borde',
        borderSize: 'Tamaño de borde',
        fontStyle: 'Estilo de fuente',
        fontWeight: 'Peso de fuente',
        fontSize: 'Tamaño de fuente',
        fontColor: 'Color de fuente',
        fontFamily: 'Familia de fuente',
        fontStyleTooltip: 'Estilo',
        fontWeightTooltip: 'Peso',
        fontSizeTooltip: 'Tamaño',
        fontColorTooltip: 'Color',
        fontFamilyTooltip: 'Familia de fuente',
        styleTooltip: 'Estilo',
        colorTooltip: 'Color',
        sizeTooltip: 'Tamaño',
        dataElement: {
            categoryName: 'Elemento de datos',
            elementName: 'Nombre',
            elementOutput: {
                auto: 'Automático',
                noOutput: 'NoSalida',
                categoryName: 'Salida',
                output: 'Salida'
            }
        }
    },
    lineProperty: {
        basicSettings: {
            categoryName: 'Ajustes básicos',
            labelText: 'Línea',
            color: 'Color de línea',
            size: 'Tamaño de línea',
            style: 'Estilo de línea',
            styleTypes: {
                solid: 'Sólido',
                dashed: 'Guiones',
                dotted: 'Puntos',
            },
        },
        position: {
            categoryName: 'Posición',
            label: 'Posición',
            left: 'Izquierda',
            top: 'Superior',
            sizeLabel: 'Tamaño',
            width: 'Ancho',
            height: 'Alto',
        },
        visibility: {
            categoryName: 'Visibilidad',
            hidden: 'Oculto',
            toggleItem: 'Alternar elemento'
        },
        miscellaneous: {
            categoryName: 'Misceláneo',
            documentMap: 'Mapa de documento',
            customAttributes: 'Atributos personalizados',
            bookmark: 'Marcador'
        },
        styleTooltip: 'Estilo',
        colorTooltip: 'Color',
        sizeTooltip: 'Tamaño'
    },
    gaugeProperty: {
        basicSettingsCategory: {
            basicSettings: 'Ajustes básicos',
            borderTypes: {
                default: 'Borde',
                left: 'Izquierda',
                top: 'Superior',
                right: 'Derecha',
                bottom: 'Inferior'
            },
            borderStyles: {
                solid: 'Sólido',
                none: 'Ninguno',
                double: 'Doble',
                dashed: 'Guiones',
                dotted: 'Puntos'
            },
            borderProperties: {
                defaultColor: 'Color de borde',
                defaultSize: 'Tamaño de borde',
                defaultStyle: 'Estilo de borde',
                leftColor: 'Color de borde izquierdo',
                leftSize: 'Tamaño de borde izquierdo',
                leftStyle: 'Estilo de borde izquierdo',
                topColor: 'Color de borde superior',
                topSize: 'Tamaño de borde superior',
                topStyle: 'Estilo de borde superior',
                rightColor: 'Color de borde derecho',
                rightSize: 'Tamaño de borde derecho',
                rightStyle: 'Estilo de borde derecho',
                bottomColor: 'Color de borde inferior',
                bottomSize: 'Tamaño de borde inferior',
                bottomStyle: 'Estilo de borde inferior'
            },
            backGround: 'Color de fondo',
            styleTooltip: 'Estilo',
            colorTooltip: 'Color',
            sizeTooltip: 'Tamaño'
        },
        positionCategory: {
            categoryName: 'Posición',
            label: 'Posición',
            left: 'Izquierda',
            top: 'Superior',
            sizeLabel: 'Tamaño',
            width: 'Ancho',
            height: 'Alto',
        },
        dataCategory: {
            label: 'Datos',
            datasetName: 'Conjunto de datos',
            noneOptionLabel: 'Ninguno',
            filters: 'Filtros'
        },
        labelCategory: {
            label: 'Etiqueta',
            enableLabel: 'Habilitar etiqueta',
            labelTarget: 'Objetivo',
            labelText: 'Texto',
            alignment: 'Alineación de texto',
            alignmentTypes: {
                leftAlignment: 'Izquierda',
                centerAlignment: 'Centro',
                rightAlignment: 'Derecha',
                topAlignment: 'Superior',
                middleAlignment: 'Mitad',
                bottomAlignment: 'Inferior'
            },
            textDecoration: 'Decoración',
            textDecorationTypes: {
                underline: 'Subrayado',
                lineThrough: 'Tachado',
                overline: 'Suprarrayado'
            }
        },
        visibilityCategory: {
            categoryName: 'Visibilidad',
            hidden: 'Oculto',
            toggleItem: 'Alternar elemento'
        },
        miscellaneousCategory: {
            categoryName: 'Misceláneo',
            customattributes: 'Atributos personalizados',
            documentMap: 'Mapa de documento',
            pageName: 'Nombre de página',
            bookmark: 'Marcador'
        },
        commonCategory: {
            fontCategory: {
                font: 'Fuente',
                fontSize: 'Tamaño de fuente',
                fontFamily: 'Familia de fuente',
                fontColor: 'Color de fuente',
                fontStyle: 'Estilo de fuente',
                fontWeight: 'Peso de fuente',
                fontWeights: {
                    default: 'Predeterminado',
                    normal: 'Normal',
                    thin: 'Delgada',
                    extraLight: 'Extralígera',
                    light: 'Ligera',
                    medium: 'Medio',
                    semiBold: 'Seminegrita',
                    bold: 'Negrita',
                    extraBold: 'Extranegrita',
                    heavy: 'Fuerte',
                },
                fontStyles: {
                    italic: 'Italic'
                }
            }
        },
        dataElement: {
            categoryName: 'Elemento de datos',
            elementName: 'Nombre',
            elementOutput: {
                auto: 'Automático',
                noOutput: 'NoSalida',
                categoryName: 'Salida',
                output: 'Salida'
            }
        }
    },
    indicatorProperty: {
        typesCategory: {
            categoryName: 'Tipos de indicadores',
            types: {
                threeColoredArrows: 'Flechas de tres colores',
                threeGrayArrows: 'Tres flechas grises',
                threeUpDownTriangles: 'Tres triángulos arriba-abajo',
                fourGrayArrows: 'Cuatro flechas grises',
                fourColoredArrows: 'Cuatro flechas de colores',
                fiveGrayArrows: 'Cinco flechas grises',
                fiveColoredArrows: 'Cinco flechas de colores',
                threeCircledSymbols: 'Tres símbolos circulares',
                threeUncircledSymbols: 'Tres símbolos sin círculo',
                threeFlags: 'Tres banderas',
                threeUnrimmedTrafficLights: 'Tres semáforos sin bordes',
                threeRimmedTrafficLights: 'Tres semáforos con bordes',
                threeSigns: 'Tres signos',
                fourTrafficLights: 'Cuatro semáforos',
                redToBlack: 'Rojo a negro',
                threeStars: 'Tres estrellas',
                fiveStars: 'Cinco estrellas',
                fourRatings: 'Cuatro clasificaciones',
                fiveRatings: 'Cinco clasificaciones',
                fiveQuarters: 'Cinco cuartos',
                fiveBlocks: 'Cinco bloques',
                custom: 'Personalizado'
            }
        },
        valueCategory: {
            categoryName: 'Valor indicador',
            value: 'Valor',
            measurementUnit: 'Unidad de medida',
            min: 'Mínimo',
            max: 'Máximo',
            numeric: 'Numérico',
            percentage: 'Por ciento'
        },
        states: {
            categoryName: 'Estados indicadores',
            icons: {
                circle: 'Círculo',
                flag: 'Bandera',
                arrowDown: 'Flecha abajo',
                arrowDownIncline: 'Flecha inclinada hacia abajo',
                arrowSide: 'Flecha lateral',
                arrowUp: 'Flecha arriba',
                arrowUpIncline: 'Flecha inclinada hacia arriba',
                boxesNoneFilled: 'Casillas no rellenadas',
                boxesOneFilled: 'Casillas una llena',
                boxesTwoFilled: 'Casillas dos llenas',
                boxesThreeFilled: 'Casillas tres llenas',
                boxesAllFilled: 'Casillas todas llenas',
                quartersNoneFilled: 'Cuartos ninguno rellenados',
                quartersOneFilled: 'Cuartos uno lleno',
                quartersTwoFilled: 'Cuartos dos llenos',
                quartersThreeFilled: 'Cuartos tres llenos',
                quartersAllFilled: 'Cuartos todos llenos',
                signalMeterNoneFilled: 'Medidor de señal no rellenado',
                signalMeterOneFilled: 'Medidor de señal uno lleno',
                signalMeterTwoFilled: 'Medidor de señal dos lleno',
                signalMeterThreeFilled: 'Medidor de señal tres lleno',
                signalMeterFourFilled: 'Medidor de señal cuatro lleno',
                starQuartersNoneFilled: 'Cuartos de estrella no rellenados',
                starQuartersOneFilled: 'Cuartos de estrella uno lleno',
                starQuartersTwoFilled: 'Cuartos de estrella dos llenos',
                starQuartersThreeFilled: 'Cuartos de estrella tres llenos',
                starQuartersAllFilled: 'Cuartos de estrella todos uno llenos',
                threeSignsCircle: 'Círculo de tres signos',
                threeSignsDiamond: 'Diamante de tres signos',
                threeSignsTriangle: 'Triángulo de tres signos',
                threeSymbolCheck: 'Verificación de tres símbolos',
                threeSymbolCross: 'Cruz de tres símbolos',
                threeSymbolExclamation: 'Exclamación de tres símbolos',
                threeSymbolUnCircledCheck: 'Verificación sin círculo de tres símbolos',
                threeSymbolUnCircledCross: 'Cruz sin círculo de tres símbolos',
                threeSymbolUnCircledExclamation: 'Exclamación sin círculo de tres símbolos',
                trafficLight: 'Semáforo',
                trafficLightUnrimmed: 'Semáforo sin bordes',
                triangleDash: 'Triángulo de guiones',
                triangleDown: 'Triángulo abajo',
                triangleUp: 'Triángulo arriba',
                lightArrowDown: 'Flecha de luz abajo',
                lightArrowDownIncline: 'Flecha de luz inclinada hacia abajo',
                lightArrowSide: 'Flecha de luz lateral',
                lightArrowUp: 'Flecha de luz arriba',
                lightArrowUpIncline: 'Flecha de luz inclinada hacia arriba',
                buttonStop: 'Botón de detener',
                buttonPlay: 'Botón de reproducir',
                buttonPause: 'Botón de pausa',
                faceSmile: 'Rostro sonriente',
                faceNeutral: 'Rostro neutro',
                faceFrown: 'Rostro ceño fruncido',
                none: 'Ninguno'
            }
        },
        miscellaneous: {
            categoryName: 'Misceláneo',
            toolTip: 'Información sobre herramientas'
        }
    },
    linearGaugeProperty: {
        scaleCategory: {
            scale: 'Escala',
            min: 'Mínimo',
            max: 'Máximo',
            interval: 'Intervalo',
            reverseDirection: 'Dirección opuesta',
            scaleBarWidth: 'Ancho',
            scaleBarColor: 'Color',
            linearTypecategory: {
                linearType: 'Tipo',
                horizontal: 'Horizontal',
                vertical: 'Vertical',
                auto: 'Automático'
            },
            scaleLabelsCategory: {
                showScaleLabels: 'Etiquetas',
                showScaleLabelsAtEnd: 'Mostrar etiquetas al final'
            },
            ticksCategory: {
                tickMark: 'Marca tick',
                majorTick: 'Tick mayor',
                minorTick: 'Tick menor',
                majorTickPlacement: 'Ubicación del tick mayor',
                minorTickPlacement: 'Ubicación del tick menor',
                tickInterval: 'Intervalo',
                tickLength: 'Largo',
                tickWidth: 'Ancho',
                tickColor: 'Color'
            },
            pointerCategory: {
                pointer: 'Puntero',
                enablePointer: 'Habilitar puntero',
                pointerValue: 'Valor',
                pointerType: 'Tipo',
                pointerTypes: {
                    marker: 'Marcador',
                    bar: 'Barra'
                },
                pointerWidth: 'Ancho',
                pointerColor: 'Color',
                markerLength: 'Largo del marcador',
                markerStyle: 'Estilo del marcador',
                markerStyles: {
                    circle: 'Círculo',
                    rectangle: 'Rectángulo',
                    triangle: 'Triángulo',
                    diamond: 'Diamante'
                }
            },
            rangeCategory: {
                range: 'Rango',
                enableRange: 'Habilitar rango',
                rangeWidth: 'Ancho',
                startRange: 'Inicio',
                endRange: 'Fin',
                startWidth: 'Inicio',
                endWidth: 'Fin',
                rangeColor: 'Color'
            }
        },
        commonCategory: {
            placementCategory: {
                placement: 'Ubicación',
                inside: 'Adentro',
                outside: 'Afuera',
                cross: 'Cruzado'
            },
            miscellaneousCategory: {
                tooltip: 'Información sobre herramientas',
                miscellaneous: 'Misceláneo'
            }
        }
    },
    radialGaugeProperty: {
        scaleCategory: {
            scale: 'Escala',
            min: 'Mínimo',
            max: 'Máximo',
            interval: 'Intervalo',
            reverseDirection: 'Dirección opuesta',
            angle: 'Ángulo',
            startAngle: 'Inicio',
            sweepAngle: 'Circular',
            scaleBarWidth: 'Ancho',
            scaleBarColor: 'Color',
            pivotX: 'EjeX',
            pivotY: 'EjeY',
            radialTypecategory: {
                radialType: 'Tipo',
                radial: 'Radial',
                halfCircle: 'Semicírculo',
                auto: 'Automático'
            },
            scaleLabelsCategory: {
                showScaleLabels: 'Etiquetas',
                showScaleLabelsAtEnd: 'Mostrar etiquetas al final',
                rotateScaleLabels: 'Rotar etiquetas'
            },
            ticksCategory: {
                tickMark: 'Marca tick',
                majorTick: 'Tick mayor',
                minorTick: 'Tick menor',
                majorTickPlacement: 'Ubicación del tick mayor',
                minorTickPlacement: 'Ubicación del tick menor',
                tickInterval: 'Intervalo',
                tickLength: 'Largo',
                tickWidth: 'Ancho',
                tickColor: 'Color'
            },
            pointerCategory: {
                pointer: 'Puntero',
                enablePointer: 'Habilitar puntero',
                pointerValue: 'Valor',
                pointerType: 'Tipo',
                pointerTypes: {
                    needle: 'Aguja',
                    bar: 'Barra',
                    marker: 'Marcador'
                },
                pointerWidth: 'Ancho',
                pointerColor: 'Color',
                markerLength: 'Largo del marcador',
                markerStyle: 'Estilo del marcador',
                markerStyles: {
                    circle: 'Círculo',
                    rectangle: 'Rectángulo',
                    triangle: 'Triángulo',
                    diamond: 'Diamante'
                },
                showPointerCap: 'Tapón',
                capWidth: 'Ancho',
                capColor: 'Color'
            },
            rangeCategory: {
                range: 'Rango',
                enableRange: 'Habilitar rango',
                rangeWidth: 'Ancho',
                startRange: 'Inicio',
                endRange: 'Fin',
                startWidth: 'Inicio',
                endWidth: 'Fin',
                rangeColor: 'Color'
            }
        },
        commonCategory: {
            placementCategory: {
                inside: 'Adentro',
                outside: 'Afuera',
                cross: 'Cruzado'
            },
            miscellaneousCategory: {
                tooltip: 'Información sobre herramientas',
                miscellaneous: 'Misceláneo'
            }
        }
    },
    subReportProperty: {
        basicSettings: {
            categoryName: 'Ajustes básicos',
        },
        appearance: {
            categoryName: 'Apariencia',
            borderTypes: {
                default: 'Borde',
                left: 'Izquierda',
                top: 'Superior',
                right: 'Derecha',
                bottom: 'Inferior'
            },
            borderStyles: {
                solid: 'Sólido',
                none: 'Ninguno',
                double: 'Doble',
                dashed: 'Guiones',
                dotted: 'Puntos'
            },
            borderProperties: {
                defaultColor: 'Color de borde',
                defaultSize: 'Tamaño de borde',
                defaultStyle: 'Estilo de borde',
                leftColor: 'Color de borde izquierdo',
                leftSize: 'Tamaño de borde izquierdo',
                leftStyle: 'Estilo de borde izquierdo',
                topColor: 'Color de borde superior',
                topSize: 'Tamaño de borde superior',
                topStyle: 'Estilo de borde superior',
                rightColor: 'Color de borde derecho',
                rightSize: 'Tamaño de borde derecho',
                rightStyle: 'Estilo de borde derecho',
                bottomColor: 'Color de borde inferior',
                bottomSize: 'Tamaño de borde inferior',
                bottomStyle: 'Estilo de borde inferior'
            }
        },
        noRows: {
            categoryName: 'No hay filas',
            font: {
                categoryName: 'Fuente',
                color: 'Color de fuente',
                family: 'Familia de fuente',
                size: 'Tamaño de fuente',
                style: 'Estilo de fuente',
                weight: 'Peso de fuente'
            },
            fontStyle: {
                label: 'Estilo de fuente',
                fontItem: {
                    default: 'Predeterminado',
                    normal: 'Normal',
                    italic: 'Italic'
                },
                fontWeight: {
                    default: 'Predeterminado',
                    normal: 'Normal',
                    thin: 'Delgada',
                    extraLight: 'Extraligera',
                    light: 'Ligera',
                    medium: 'Medio',
                    semiBold: 'Seminegrita',
                    bold: 'Negrita',
                    extraBold: 'Extranegrita',
                    heavy: 'Fuerte',
                }
            },
            textDecoration: {
                categoryName: 'Decoración de texto',
                defaultStyle: 'Predeterminado',
                none: 'Ninguno',
                underLine: 'Subrayado',
                overLine: 'Suprarrayado',
                lineThrough: 'Tachado'
            },
            format: 'Formato',
            lineHeight: 'Alto de línea',
            message: 'Mensaje',
            paddingTypes: {
                label: 'Relleno',
                left: 'Izquierda',
                right: 'Derecha',
                top: 'Superior',
                bottom: 'Inferior',
            },
            textAlign: {
                categoryName: 'Alineación de texto',
                default: 'Predeterminado',
                left: 'Izquierda',
                right: 'Derecha',
                center: 'Centro'
            },
            verticalAlign: {
                categoryName: 'Alineación vertical',
                default: 'Predeterminado',
                top: 'Superior',
                middle: 'Mitad',
                bottom: 'Inferior'
            },
            writingMode: {
                categoryName: 'Modo de escritura',
                default: 'Predeterminado',
                horizontal: 'Horizontal',
                vertical: 'Vertical',
                rotateProperty: 'Rotar 270'
            }
        },
        visibility: {
            categoryName: 'Visibilidad',
            hidden: 'Oculto',
            toggleItem: 'Alternar elemento'
        },
        position: {
            categoryName: 'Posición',
            label: 'Posición',
            left: 'Izquierda',
            top: 'Superior',
            sizeLabel: 'Tamaño',
            width: 'Ancho',
            height: 'Alto',
        },
        miscellaneous: {
            categoryName: 'Misceláneo',
            keepTogether: 'Mantener junto',
            toolTip: 'Información sobre herramientas',
            documentMap: 'Mapa de documento',
            customAttributes: 'Atributos personalizados',
            bookmark: 'Marcador'
        },
        fontStyleTooltip: 'Estilo',
        fontWeightTooltip: 'Peso',
        fontSizeTooltip: 'Tamaño',
        fontColorTooltip: 'Color',
        fontFamilyTooltip: 'Familia de fuente',
        styleTooltip: 'Estilo',
        colorTooltip: 'Color',
        sizeTooltip: 'Tamaño',
        dataElement: {
            categoryName: 'Elemento de datos',
            elementName: 'Nombre',
            elementOutput: {
                auto: 'Automático',
                noOutput: 'NoSalida',
                categoryName: 'Salida',
                output: 'Salida'
            }
        }
    },
    rectangleProperty: {
        basicSettings: {
            categoryName: 'Ajustes básicos',
            borderTypes: {
                default: 'Borde',
                left: 'Izquierda',
                top: 'Superior',
                right: 'Derecha',
                bottom: 'Inferior'
            },
            borderStyles: {
                solid: 'Sólido',
                none: 'Ninguno',
                double: 'Doble',
                dashed: 'Guiones',
                dotted: 'Puntos'
            },
            borderProperties: {
                defaultColor: 'Color de borde',
                defaultSize: 'Tamaño de borde',
                defaultStyle: 'Estilo de borde',
                leftColor: 'Color de borde izquierdo',
                leftSize: 'Tamaño de borde izquierdo',
                leftStyle: 'Estilo de borde izquierdo',
                topColor: 'Color de borde superior',
                topSize: 'Tamaño de borde superior',
                topStyle: 'Estilo de borde superior',
                rightColor: 'Color de borde derecho',
                rightSize: 'Tamaño de borde derecho',
                rightStyle: 'Estilo de borde derecho',
                bottomColor: 'Color de borde inferior',
                bottomSize: 'Tamaño de borde inferior',
                bottomStyle: 'Estilo de borde inferior'
            },
            backGround: 'Color de fondo',
            styleTooltip: 'Estilo',
            colorTooltip: 'Color',
            sizeTooltip: 'Tamaño'
        },
        backgroundImage: {
            categoryName: 'Imagen de fondo',
            source: 'Fuente',
            sourceTypes: {
                external: 'Externo',
                embedded: 'Insertado',
                database: 'Base de datos'
            },
            value: 'Valor',
            mimeTypeLabel: 'Tipo MIME',
            mimeTypes: {
                bmp: 'imagen/bmp',
                jpeg: 'imagen/jpeg',
                gif: 'imagen/gif',
                png: 'imagen/png',
                xPng: 'imagen/x-png'
            },
            repeatProperty: {
                categoryName: 'Repetir',
                repeat: 'Repetir',
                repeatX: 'RepetirX',
                repeatY: 'RepetirY',
                defaultType: 'Predeterminado',
                clip: 'Clip',
                fit: 'Ajustado'
            }
        },
        pageBreak: {
            categoryName: 'Salto de página',
            enableProperty: {
                labelText: 'Habilitar salto de página',
                breakLocation: {
                    labelText: 'Ubicación de salto de página',
                    none: 'Ninguno',
                    start: 'Inicio',
                    end: 'Fin',
                    startAndEnd: 'Inicio y fin',
                    between: 'Entre'
                },
                pageNumberReset: 'Restablecer número de página'
            },
        },
        position: {
            categoryName: 'Posición',
            label: 'Posición',
            left: 'Izquierda',
            top: 'Superior',
            sizeLabel: 'Tamaño',
            width: 'Ancho',
            height: 'Alto',
        },
        visibility: {
            categoryName: 'Visibilidad',
            hidden: 'Oculto',
            toggleItem: 'Alternar elemento'
        },
        miscellaneous: {
            categoryName: 'Misceláneo',
            keepTogether: 'Mantener junto',
            pageName: 'Nombre de página',
            toolTip: 'Información sobre herramientas',
            documentMap: 'Mapa de documento',
            customAttributes: 'Atributos personalizados',
            bookmark: 'Marcador'
        },
        dataElement: {
            categoryName: 'Elemento de datos',
            elementName: 'Nombre',
            elementOutput: {
                auto: 'Automático',
                noOutput: 'NoSalida',
                categoryName: 'Salida',
                output: 'Salida',
                contentsOnly: 'Solo contenido'
            }
        }
    },
    browseFile: {
        openFile: {
            selectReport: 'Seleccionar informe',
            label: 'Abierto',
        },
        saveFile: {
            saveAsReport: 'Guardar como informe',
            name: 'Nombre',
            save: 'Guardar',
        },
        close: 'Cerrar',
        cancel: 'Cancelar',
        waterMark: 'Nombre de informe',
        emptyMessage: 'Esta categoría está vacía',
        alertMessage: {
            reportServer: 'Servidor de informe',
            selectCategory: 'Por favor, seleccionar categoría',
        },
        warningMessage: {
            fileNameLabel: 'Un elemento "',
            fileNameExist: '.rdl" ya existe. ¿Quieres sustituir el elemento existente?',
            populateCategory: 'El diseñador de informes no ha podido recuperar los recursos del ReportServer.',
        },
        reloadAriaLabelText: 'Recargar explorador',
        containerAriaLabelText: 'Examinar contenedor de archivos'
    },
    publishReport: {
        title: 'Publicar como informe',
        publish: 'Publicar',
        category: 'Categoría',
        selectCategory: 'Por favor, crear una categoría',
        createCategory: 'Crear categoría',
        categoryPermission: 'Habilitar permiso de creación para crear una nueva categoría',
        categoryname: 'Nombre',
        emptyName: 'Por favor, ingresar nombre de informe',
        invalidName: 'No se admiten los siguientes caracteres: \' + , [ ] % #',
        description: 'Descripción',
        maxCharacter: '*1024 caracteres como máximo',
        markaspublic: 'Marcar como público',
        cancel: 'Cancelar',
        closeToolTip: 'Cerrar',
        tags: 'Etiquetas',
        newTag: 'Nueva Etiqueta',
        tagWaterMark: 'Buscar etiqueta',
        splCharacter: 'No se admiten caracteres especiales',
        addCategory: {
            title: 'Nueva categoría',
            name: 'Nombre',
            description: 'Descripción',
            emptyValidation: 'Por favor, ingresar el nombre de la categoría',
            duplicateNameValidation: 'El nombre del elemento ya existe',
            createActionFailure: 'Error al crear categoría en el servidor',
            saveLabel: 'Guardar'
        },
        warningMessage: {
            sameNameError: 'Ya existe un informe con el mismo nombre en la categoría',
            replaceMessage: '. ¿Quieres sustituirlo?',
            publishAsReport: 'Publicar como informe'
        },
    },
    expressionMenu: {
        reset: 'Reiniciar',
        label: 'Expresión',
        advanced: 'Avanzado',
        role: 'Menú de expresiones'
    },
    propertyPanel: {
        property: 'PROPIEDADES',
        data: 'DATOS',
        name: 'Nombre',
        toolTipStyle: 'Estilo',
        toolTipColor: 'Color',
        toolTipWidth: 'Ancho',
        setSorts: 'Establecer ordenamiento',
        setFilters: 'Establecer filtros',
        customAttributes: 'Establecer atributos',
        advancedOptions: 'Opciones avanzadas',
        closeAdvance: 'Cerrar opciones avanzadas',
        codemodules: 'Código',
        expressionList: {
            top: 'Superior',
            right: 'Derecha',
            bottom: 'Inferior',
            left: 'Izquierda',
            style: 'Estilo',
            color: 'Color',
            size: 'Tamaño',
            fontFamily: 'Familia de fuente',
            width: 'Ancho',
            height: 'Alto',
            weight: 'Peso',
            image: 'Imagen'
        },
        alertMessage: {
            emptyNameValidation: 'El nombre no puede estar vacío',
            duplicateNameValidation: 'El nombre ya existe',
            invalidCharacterValidation: 'El nombre no debe contener espacios ni caracteres especiales',
            alertDialogHeader: 'PROPIEDADES',
            specialCharacterValidation: 'El valor de la propiedad no debe contener espacios ni caracteres especiales.'
        },
        unitType: {
            inchText: 'In',
            centimeterText: 'cm',
            pixelText: 'pixel',
            pointText: 'pt',
            millimeterText: 'mm',
            picaText: 'pc'
        },
        setGroups: 'Establecer grupos',
        addDataset: 'Añadir conjunto de datos',
        dataAlertMsg: '¡Conjunto de datos no añadido!',
        NoDataFound: 'Datos no encontrados',
        None: 'Ninguno',
        propertyEdit: 'Editar',
        itemCountWaterMark: 'elementos',
        back: 'Volver',
        propertyEditorAlert: {
            title: 'Editor de propiedades',
            content: '¿Quieres cancelar el editor de propiedades?'
        }
    },
    dataSource: {
        newDatasource: 'NUEVA FUENTE DE DATOS',
        sharedData: 'FUENTE DE DATOS COMPARTIDA',
        datasource: 'FUENTES DE DATOS',
        switchLabel: 'Cambiar a panel de datos',
        previousPanel: 'Panel anterior',
        datasourceLabel: 'Nombre de fuente de datos',
        datasourceList: {
            data: 'Datos',
            contextMenu: {
                edit: 'Editar',
                deleteItem: 'Eliminar',
                create: 'Crear conjunto de datos',
                clone: 'Clonar'
            }
        },
        datasourceType: {
            existOption: 'Existente',
            newOption: 'Crear nuevo',
            selectDatasoure: 'Seleccionar el conjunto de datos',
            connectDatasource: 'Conectar conjunto de datos',
            datasourceType: 'Escoger el tipo para conectar',
            sqlLabel: 'Microsoft SQL',
            azuresqldwlabel: 'Almacén de datos Azure SQL',
            sqlCeLabel: 'SQLCE',
            odbcLabel: 'ODBC',
            oracleLabel: 'Oracle',
            oledbLabel: 'OLEDB',
            xmlLabel: 'XML',
            jsonLabel: 'JSON',
            csvLabel: 'CSV',
            excelLabel: 'Excel',
            mysqlLabel: 'MySQL',
            elasticSearchLabel: 'Elastic Search',
            mariadbLabel: 'MariaDB',
            memsqlLabel: 'MemSQL',
            sharedLabel: 'Shared',
            cdataLabel: 'CDATA',
            snowflakeLabel: 'Snowflake',
            ssasLabel: 'Microsoft SQL Analysis Services',
            verticaLabel: 'Vertica',
            gcsqlLabel: 'Google Cloud SQL',
            redshiftLabel: 'Amazon Redshift',
            amazonAuroraLabel: 'Amazon Aurora',
            amazonRDSLabel: 'Amazon RDS',
            webapilabel: 'Web API',
            postgresqllabel: 'PostgreSQL',
            odatalabel: 'OData'
        },
        datasourceConnection: {
            newConnection: 'NUEVA CONEXIÓN',
            editConnection: 'EDITAR CONEXIÓN',
            name: 'Nombre',
            save: 'Guardar',
            connect: 'Conectar',
            cancel: 'Cancelar',
            disclaimerText: 'Al conectarse, aceptas estas condiciones',
            disclaimerLink: 'términos',
            disclaimerTooltip: 'El cliente reconoce y acepta que, al solicitar a {customBrandName} que se conecte a esta fuente de datos (que incluye datos, sistemas de almacenamiento, entorno y otros sistemas constituyentes) en nombre del cliente, el cliente certifica que dispone de los derechos y licencias adecuados de los propietarios de la fuente de datos para permitir al cliente y a {customBrandName} en nombre del cliente conectarse a la fuente de datos y utilizarla. El cliente acepta indemnizar completamente a {customBrandName} por todas y cada una de las reclamaciones y honorarios. Si el cliente no está de acuerdo, no deberá solicitar a {customBrandName} que se conecte a la fuente de datos.'
        },
        advanceDatasource: {
            authentication: 'Autenticación',
            prompt: 'Prompt',
            none: 'Ninguno',
            userName: 'Nombre de usuario',
            password: 'Contraseña',
            promptLabel: 'Texto prompt',
            savePassword: 'Guardar contraseña',
            connectionString: 'Cadena de conexión',
            authenticationType: 'Tipo de autenticación',
            alertMessage: {
                alertUserName: 'Especificar nombre de usuario',
                alertPassword: 'Especificar contraseña',
                alertPrompt: 'Especificar texto prompt',
                alertConnectionString: 'Especificar cadena de conexión',
            }
        },
        sqlDatasource: {
            authenticationType: 'Tipo de autenticación',
            window: 'Windows',
            sqlServer: 'Servidor SQL',
            userName: 'Nombre de usuario',
            password: 'Contraseña',
            switchLabel: 'Panel de avance de la fuente de datos',
            switchAlert: 'El cambio al diseñador visual descartará los cambios manuales realizados en la cadena de conexión. ¿Quieres utilizar el diseñador visual de todos modos? ',
            basicOption: {
                serverName: 'Nombre de servidor',
                savePassword: 'Guardar contraseña',
                database: 'Base de datos',
                advanceSwitch: 'Opciones avanzadas',
                encrypt: 'encriptar',
                trustserver: 'Certificado de Servidor de Confianza'
            },
            advanceOption: {
                connectionString: 'Cadena de conexión',
                promptLabel: 'Texto prompt',
                prompt: 'Prompt',
                none: 'Ninguno',
                savePassword: 'Guardar contraseña',
                basicSwitch: 'Opciones básicas',
                impersonate: 'Habilitar suplantación de usuario'
            },
            alertMessage: {
                connectionString: 'Especificar cadena de conexión',
                promptText: 'Especificar texto prompt',
                userName: 'Especificar nombre de usuario',
                password: 'Especificar contraseña',
                serverName: 'Especificar nombre de servidor',
                databaseName: 'Especificar nombre de base de datos'
            }
        },
        elasticSearchDatasource: {
            connectionType: 'Tipo de conexión',
            authenticationType: 'Tipo de autenticación',
            window: 'Windows',
            server: 'Servidor ElasticSearch',
            none: 'Ninguno',
            basicHttp: 'Autenticación HTTP Basic',
            userName: 'Nombre de usuario',
            password: 'Contraseña',
            port: 'Puerto',
            connectionTypes: {
                elasticSQL: 'Elasticsearch SQL',
                openDistro: 'Distribución abierta'
            },
            basicOption: {
                serverName: 'Nombre de servidor',
                database: 'Base de datos'
            },
            alertMessage: {
                port: 'Especificar número de puerto',
                userName: 'Especificar nombre de usuario',
                password: 'Especificar contraseña',
                serverName: 'Especificar nombre de servidor',
                databaseName: 'Especificar nombre de base de datos'
            },
            noteMessage: {
                note: 'Nota: ',
                message: 'Para conectarse a una instancia de Elasticsearch alojada en Amazon Web Service, utilice el tipo de conexión Open Distro.'
            }
        },
        postgreSQLDatasource: {
            serverName: 'Nombre de servidor',
            database: 'Base de datos',
            port: 'Puerto',
            userName: 'Nombre de usuario',
            password: 'Contraseña',
            savePassword: 'Guardar contraseña',
            basicSwitch: 'Opciones básicas',
            advanceSwitch: 'Opciones avanzadas',
            switchAlert: 'El cambio al diseñador visual descartará los cambios manuales realizados en la cadena de conexión. ¿Quieres utilizar el diseñador visual de todos modos?',
            switchLabel: 'Panel de avance de la fuente de datos',
            alertMessage: {
                aletServerName: 'Especificar nombre de servidor',
                aletPort: 'Especificar número de puerto',
                alertUserName: 'Especificar nombre de usuario',
                alertPassword: 'Especificar contraseña',
                alertDatabase: 'Especificar nombre de base de datos'
            }
        },
        sqlceDatasource: {
            connectionString: 'Cadena de conexión',
            authenticationType: 'Tipo de autenticación',
            authentication: 'Autenticación',
            none: 'Ninguno',
            password: 'Contraseña',
            savePassword: 'Guardar contraseña',
            alertMessage: {
                connectionString: 'Especificar cadena de conexión',
                password: 'Especificar contraseña'
            }
        },
        odbcDatasource: {
            connectionString: 'Cadena de conexión',
            authenticationType: 'Tipo de autenticación',
            authentication: 'Autenticación',
            prompt: 'Prompt',
            none: 'Ninguno',
            userName: 'Nombre de usuario',
            password: 'Contraseña',
            promptLabel: 'Texto prompt',
            savePassword: 'Guardar contraseña',
            alertMessage: {
                connectionString: 'Especificar cadena de conexión',
                promptText: 'Especificar texto prompt',
                userName: 'Especificar nombre de usuario',
                password: 'Especificar contraseña'
            }
        },
        oracleDatasource: {
            connectionString: 'Cadena de conexión',
            authenticationType: 'Tipo de autenticación',
            authentication: 'Autenticación',
            prompt: 'Prompt',
            none: 'Ninguno',
            userName: 'Nombre de usuario',
            password: 'Contraseña',
            promptLabel: 'Texto Prompt',
            savePassword: 'Guardar contraseña',
            alertMessage: {
                connectionString: 'Especificar cadena de conexión',
                promptText: 'Especificar texto prompt',
                userName: 'Especificar nombre de usuario',
                password: 'Especificar contraseña'
            }
        },
        oledbDatasource: {
            connectionString: 'Cadena de conexión',
            authenticationType: 'Tipo de autenticación',
            authentication: 'Autenticación',
            prompt: 'Prompt',
            none: 'Ninguno',
            userName: 'Nombre de usuario',
            password: 'Contraseña',
            promptLabel: 'Texto prompt',
            savePassword: 'Guardar contraseña',
            alertMessage: {
                connectionString: 'Especificar cadena de conexión',
                prompt: 'Especificar texto prompt',
                userName: 'Especificar nombre de usuario',
                password: 'Especificar contraseña'
            }
        },
        webapiDatasource: {
            url: 'URL',
            methodType: 'Método',
            get: 'GET',
            post: 'POST',
            requestBody: 'Solicitar cuerpo',
            requestRaw: 'Raw',
            parameter: 'Parámetro (s)',
            header: 'Encabezado (s)',
            dataFormat: 'Formato de datos',
            json: 'JSON',
            csv: 'CSV',
            xml: 'XML',
            firstRow: 'Considerar la primera fila como encabezado',
            authenticationType: 'Tipo de autenticación',
            userName: 'Nombre de usuario',
            password: 'Contraseña',
            separatorTypes: {
                comma: 'Coma',
                space: 'Espacio',
                tab: 'Tabulación',
                semicolon: 'Punto y coma',
                custom: 'Personalizado'
            },
            separator: 'Separador',
            delimiter: 'Delimitador',
            alertMessage: {
                urlValidation: 'URL inválida',
                userNameValidation: 'Especificar nombre de usuario',
                passwordValidation: 'Especificar contraseña',
                fieldsValidation: 'Especificar valor en los campos',
                delimiterAlert: 'Especificar delimitador'
            },
            none: 'Ninguno',
            basicHttp: 'Autenticación HTTP Basic',
            addField: 'AÑADIR',
            deleteField: 'Borrar campo',
            key: 'Llave',
            value: 'Valor',
            closeToolTip: 'Cerrar',
            pagination: {
                pagination: 'Tipo de paginación',
                offset: {
                    offset: 'Offset',
                    maxRow: 'Filas máx',
                    startFieldName: 'Iniciar nombre de campo',
                    startValue: 'Valor de inicio',
                    limitFieldName: 'Nombre de campo límite',
                    limitValue: 'Valor límite',
                    passHeader: 'Paso por encabezado',
                    lookHeader: 'Mirar en encabezado',
                    totalRecord: 'Ruta total de registros',
                    dataIndicator: 'Ruta de indicador de datos',
                    limitField: 'límite',
                    resultTotalRecord: 'resultado.total',
                    resultDataIndicator: 'valor.resultado.datos',
                },
                nextpage: {
                    nextpage: 'Página siguiente',
                    maxIteration: 'Interacciones máx',
                    nextPageName: 'Nombre de campo de la siguiente página',
                    nextPageValue: 'Valor de la siguiente página',
                    pageSizeFieldName: 'Nombre de campo del tamaño de página',
                    pageSizeValue: 'Valor del tamaño de página',
                    totalPagesPathName: 'Ruta del total de páginas',
                    page: 'página',
                    pageSize: 'Tamaño de página',
                    resultTotalPages: 'resultado.totalPpaginas',
                },
                nexttoken: {
                    nexttoken: 'Siguiente token',
                    nextTokenFieldName: 'Nombre de campo del siguiente token',
                    nextTokenPathName: 'Ruta del siguiente token',
                    resultNextToken: 'resultado.próximoTokendePágina',
                    nextTokenPath: 'próximoToken',
                },
                nexturl: {
                    nexturl: 'Siguiente url',
                    nextURLPathName: 'Ruta de la siguiente url',
                    resultNextURL: 'resultado.metadatos.siguienteUrl',
                },
                alertMessage: {
                    startFieldNameWarning: 'El nombre del campo inicio no puede estar vacío',
                    limitFieldNameWarning: 'El nombre del campo límite no puede estar vacío',
                    dataFieldPathWarning: 'Deben estar presentes los registros totales o la ruta del indicador de datos',
                    nextPageFieldNameWarning: 'El nombre del campo siguiente no puede estar vacío',
                    nextPageSizeFieldNameWarning: 'El nombre del campo tamaño de página no puede estar vacío',
                    nextTokenFieldNameWarning: 'El nombre del campo siguiente token no puede estar vacío',
                    nextTokenFieldValueWarning: 'El valor del campo siguiente token no puede estar vacío',
                    nextUrlPathWarning: 'El campo siguiente URL no puede estar vacío',
                }
            }
        },
        jsonDatasource: {
            jsonType: 'Tipo',
            jsonTypes: {
                inLine: 'En línea',
                upload: 'Archivo',
                external: 'Externo'
            },
            inLineText: 'En línea',
            filePath: 'Ruta de archivo',
            urlLabel: 'Externo',
            maxFileSize: 'Tamaño de archivo máximo: 20 MB',
            uploadCompleted: 'Carga completada',
            uploadFailed: 'Carga fallida',
            uploadInitiate: 'Iniciando carga...',
            fileExceed: 'El archivo seleccionado excede el límite de tamaño de ',
            uploadProgress: 'Cargando ',
            alertMessage: {
                jsonAlert: 'Especificar datos JSON',
                uploadAlert: 'Por favor, seleccionar un archivo',
                urlAlert: 'URL inválida',
                xmlAlert: 'Especificar datos XML',
                delimiterAlert: 'Especificar delimitador'
            },
            waterMark: {
                xmlInline: 'Pegar datos XML aquí',
                jsonInline: 'Pegar datos JSON aquí'
            },
            separatorTypes: {
                comma: 'Coma',
                space: 'Espacio',
                tab: 'Tabulación',
                semicolon: 'Punto y coma',
                custom: 'Personalizado'
            },
            separator: 'Separador',
            delimiter: 'Delimitador',
            firstRowHeader: 'Considerar la primera fila como encabezado',
            extractType: 'Extraer tipo',
            extractTypes: {
                workSheets: 'Hojas de trabajo',
                tables: 'Tablas'
            }
        },
        mysqlDatasource: {
            serverName: 'Nombre de servidor',
            port: 'Puerto',
            userName: 'Nombre de usuario',
            password: 'Contraseña',
            savePassword: 'Guardar contraseña',
            database: 'Base de datos',
            basicSwitch: 'Opciones básicas',
            advanceSwitch: 'Opciones avanzadas',
            switchAlert: 'El cambio al diseñador visual descartará los cambios manuales realizados en la cadena de conexión. ¿Quieres utilizar el diseñador visual de todos modos?',
            switchLabel: 'Panel de avance de la fuente de datos',
            alertMessage: {
                serverName: 'Especificar nombre de servidor',
                port: 'Especificar número de puerto',
                userName: 'Especificar nombre de usuario',
                password: 'Especificar contraseña',
                database: 'Especificar nombre de base de datos'
            }
        },
        googleCloudSQL: {
            dbEngine: 'Motor de base de datos',
            mysqlEngine: 'MySQL',
            psqlEngine: 'PostgreSQL'
        },
        amazonAurora: {
            dbEngine: 'Motor de base de datos',
            mysqlEngine: 'MySQL',
            psqlEngine: 'PostgreSQL'
        },
        amazonRDS: {
            dbEngine: 'Motor de base de datos',
            mysqlEngine: 'MySQL',
            psqlEngine: 'PostgreSQL',
            auroraMysqlEngine: 'Amazon Aurora MySQL',
            auroraPsqlEngine: 'Amazon Aurora PSQL',
            mariaDbEngine: 'MariaDB',
            sqlserver: 'Servidor SQL',
            oracle: 'Oracle'
        },
        snowflakeDatasource: {
            serverName: 'Nombre de servidor',
            serverWatermark: 'Ejemplo',
            database: 'Base de datos',
            userName: 'Nombre de usuario',
            password: 'Contraseña',
            savePassword: 'Guardar contraseña',
            basicSwitch: 'Opciones básicas',
            advanceSwitch: 'Opciones avanzadas',
            switchAlert: 'El cambio al diseñador visual descartará los cambios manuales realizados en la cadena de conexión. ¿Quieres utilizar el diseñador visual de todos modos?',
            switchLabel: 'Panel de avance de la fuente de datos',
            alertMessage: {
                serverName: 'Especificar nombre de servidor',
                userName: 'Especificar nombre de usuario',
                password: 'Especificar contraseña',
                database: 'Especificar nombre de base de datos'
            }
        },
        verticaDatasource: {
            serverName: 'Nombre de servidor',
            database: 'Base de datos',
            userName: 'Nombre de usuario',
            password: 'Contraseña',
            savePassword: 'Guardar contraseña',
            basicSwitch: 'Opciones básicas',
            port: 'Puerto',
            advanceSwitch: 'Opciones avanzadas',
            switchAlert: 'El cambio al diseñador visual descartará los cambios manuales realizados en la cadena de conexión. ¿Quieres utilizar el diseñador visual de todos modos?',
            switchLabel: 'Panel de avance de la fuente de datos',
            alertMessage: {
                serverName: 'Especificar nombre de servidor',
                userName: 'Especificar nombre de usuario',
                password: 'Especificar contraseña',
                port: 'Especificar número de puerto',
                database: 'Especificar nombre de base de datos'
            }
        },
        sharedDatasource: {
            datasource: 'FUENTE DE DATOS COMPARTIDA',
            alertMessage: 'Seleccionar una fuente de datos compartida'
        },
        alertMessage: {
            headerLabel: 'Fuente de datos',
            connectionFailed: 'El diseñador de informes no pudo conectar la fuente de datos',
            dataExtensionFailed: 'El proveedor de datos seleccionado no está disponible. Por favor, verifica la extensión de los datos.',
            dataSourceNotFound: 'La fuente de datos no está disponible para el conjunto de datos seleccionado.',
            connectStringValidation: 'Como la cadena de conexión contiene expresiones en la fuente de datos ',
            validationMessage: ' Por favor, actualizar con una cadena de conexión válida.',
            executionMessage: ', no podemos ejecutar el conjunto de datos para esta conexión.',
            confirmMessage: ' ¿Seguro que quieres guardar la fuente de datos?',
            deleteValue: 'Eliminar fuente de datos \'',
            emptyNameVaildation: 'Especificar el nombre de la fuente de datos',
            duplicateName: 'El nombre especificado ya existe en la lista de fuentes de datos',
            invalidCharacterValidation: 'El nombre no debe contener espacios ni caracteres especiales',
            sharedPermissionValidation: 'Se ha restringido la creación de fuentes de datos, excepto fuentes de datos compartidas.'
        },
        descriptionText: {
            amazonAuroraInfo: 'Amazon Aurora es un servicio de base de datos relacional desarrollado y ofrecido por Amazon Web Services. El conector de Amazon Aurora te permite acceder a los datos de las bases de datos de Amazon Aurora dentro del diseñador de {customBrandName}.',
            azureSqlInfo: 'El almacén de datos Azure SQL es una oferta de servicio de almacén de datos empresariales basada en la nube de Microsoft. Aprovecha el procesamiento paralelo masivo para ejecutar rápidamente consultas complejas en petabytes de datos. El conector de Azure SQL te permite acceder a los datos de las bases de datos del almacén de datos Azure SQL desde el diseñador de {customBrandName}.',
            cdataInfo: 'CDATA es una base de datos SQL distribuida y altamente escalable que puede ejecutarse en cualquier lugar. Ofrece el máximo rendimiento para cargas de trabajo transaccionales y analíticas con estructuras de datos relacionales familiares. El conector cdata te permite acceder a datos de bases de datos cdata con la terminal MySQL dentro del diseñador {customBrandName}.',
            csvInfo: 'Lleva tus archivos CSV al diseñador de {customBrandName} y preparar informes para ver el historial que residen en tus datos.',
            excelInfo: 'Lleva tus archivos de Excel como tablas u hojas de cálculo al diseñador de {customBrandName}. Explora y juega con tus datos, prepara informes para ver el historial que reside en tus datos.',
            googleBigQueryInfo: 'BigQuery es un servicio web RESTful que permite el análisis interactivo de conjuntos de datos masivos trabajando conjuntamente con Google Storage. Se trata de un software como servicio sin servidor que puede utilizarse de forma complementaria con MapReduce.',
            jsonInfo: 'Lleva tus archivos JSON al diseñador de {customBrandName} cargándolos para preparar informes y ver el historial que vive en tus datos.',
            mariadbInfo: 'MariaDB es una bifurcación del sistema de gestión de bases de datos relacionales MySQL, desarrollada por la comunidad y con soporte comercial, que garantiza que seguirá siendo de código abierto. El conector MariaDB permite acceder a datos de bases de datos MariaDB desde el diseñador {customBrandName}.',
            memsqlInfo: 'MemSQL es una base de datos SQL distribuida y altamente escalable que puede ejecutarse en cualquier lugar. Ofrece el máximo rendimiento para cargas de trabajo transaccionales y analíticas con estructuras de datos relacionales familiares. El conector MemSQL te permite acceder a los datos de las bases de datos MemSQL dentro del diseñador de {customBrandName}.',
            microsoftsqlInfo: 'El servidor SQL es el sistema de gestión de bases de datos relacionales de Microsoft, uno de los servidores de bases de datos más fiables del mercado, que incluye una serie de servicios de valor añadido, como análisis, generación de informes, etc., además del sistema de gestión de bases de datos principal. El conector del servidor SQL permite acceder a los datos de las bases de datos del servidor Microsoft SQL desde el diseñador {customBrandName}.',
            ssasInfo: 'SQL Server Analysis Services (SSAS) es la tecnología de herramientas empresariales de Microsoft para desarrollar soluciones de procesamiento analítico en línea (OLAP). En términos sencillos, puedes utilizar SSAS para crear cubos utilizando datos de data marts / data warehouse para un análisis de datos más profundo y rápido.',
            mysqlInfo: 'MySQL es un sistema de gestión de bases de datos relacionales de código abierto y de libre acceso, que destaca sobre todo por su rapidez de procesamiento, su probada fiabilidad y su facilidad y flexibilidad de uso. El conector MySQL te permite acceder a los datos de las bases de datos MySQL dentro del diseñador {customBrandName}.',
            elasticSearchInfo: 'Elasticsearch es un motor de búsqueda basado en la biblioteca lucene. Proporciona un motor de búsqueda de texto completo distribuido y multiusuario con una interfaz web HTTP y documentos JSON sin esquemas. Elasticsearch puede utilizarse para buscar todo tipo de documentos. También proporciona búsqueda escalable, tiene búsqueda casi en tiempo real y soporta multitenencia. El conector Elasticsearch permite acceder a datos de clústeres Elasticsearch dentro del diseñador {customBrandName}.',
            odataInfo: 'OData es un protocolo abierto que permite la creación y el consumo de API RESTful consultables e interoperables de forma sencilla y estándar. Conéctate con el diseñador de {customBrandName} y crea informes para ver el historial de tus datos.',
            odbcInfo: 'Un controlador ODBC utiliza la interfaz Open Database Connectivity (ODBC) de Microsoft que permite a las aplicaciones acceder a los datos de los sistemas de gestión de bases de datos (SGBD) utilizando SQL como estándar de acceso a los datos.',
            oledbInfo: 'OLE DB es la interfaz de programa de aplicación (API) estratégica de bajo nivel de Microsoft para acceder a distintas fuentes de datos. OLE DB incluye no sólo las capacidades del lenguaje de consulta estructurado (SQL) de la interfaz de datos estándar Open Database Connectivity (ODBC), patrocinada por Microsoft, sino también el acceso a datos distintos de SQL.',
            oracleInfo: 'Oracle es una base de datos relacional de nivel empresarial con funciones analíticas avanzadas. El conector de Oracle te permite acceder a los datos de las bases de datos de Oracle dentro del diseñador {customBrandName}.',
            psqlInfo: 'PostgreSQL es un potente sistema de base de datos objeto-relacional de código abierto que enfatiza la extensibilidad y el cumplimiento de estándares. El conector PostgreSQL te permite acceder a datos de bases de datos PostgreSQL dentro del diseñador {customBrandName}.',
            snowflakeInfo: 'Snowflake es un almacén de datos basado en la nube que proporciona una plataforma sin límites para almacenar y recuperar datos. A diferencia de las arquitecturas tradicionales de un solo clúster con disco compartido/nada compartido, Snowflake tiene como arquitectura de datos compartidos varios clústeres que son dinámicos y altamente escalables gracias a sistemas de almacenamiento de clase empresarial basados en la nube.',
            webAPIInfo: 'Conéctate con el diseñador de {customBrandName} utilizando casi todas las fuentes de datos que tienen una API REST. Elabora informes y descubre el historial que reside en tus datos.',
            xmlInfo: 'Lleva tus archivos XML al diseñador de {customBrandName} y prepara informes para ver el historial que reside en tus datos.',
            verticaInfo: 'Vertica es el almacén de análisis unificado más avanzado, que combina la potencia de un motor de consulta SQL de alto rendimiento, almacenamiento en columnas, compresión avanzada, proyecciones optimizadas y procesamiento masivo en paralelo con análisis avanzados y aprendizaje automático, para que pueda liberar el verdadero potencial de tus datos sin límites ni concesiones. El conector Vertica te permite acceder a los datos de las bases de datos Vertica dentro del diseñador de {customBrandName}.',
            gcsqlInfo: 'Google Cloud SQL es un servicio de base de datos totalmente gestionado basado en MySQL y PostgreSQL. El conector de Google Cloud SQL te permite acceder a los datos de las bases de datos de Google Cloud SQL dentro del diseñador de {customBrandName}.',
            redshiftInfo: 'Amazon Redshift es un almacén de datos rápido y escalable que simplifica y rentabiliza el análisis de todos los datos de tu almacén y lago de datos. Se basa en PostgreSQL. El conector de Amazon Redshift te permite acceder a los datos de las bases de datos de Amazon Redshift desde el diseñador de {customBrandName}.',
            rdsInfo: 'Amazon Relational Database Service (Amazon RDS) es un servicio web que facilita la configuración, el funcionamiento y el escalado de una base de datos relacional en la nube de AWS. Proporciona capacidad rentable y redimensionable para reducir la automatización de las tareas administrativas. Ofrece motores de bases de datos como Amazon Aurora, PostgreSQL, MySQL, MariaDB, Oracle Database y Microsoft SQL Server. El conector de Amazon RDS te permite acceder a los datos de las bases de datos de Amazon RDS dentro del diseñador de {customBrandName}.'
        }
    },
    imageManager: {
        headerText: 'GESTOR DE IMÁGENES',
        addImageButton: 'AÑADIR IMAGEN',
        deleteImage: 'Eliminar imagen insertada',
        image: 'Imagen'
    },
    linkParameter: {
        title: 'Parámetros',
        headerText: 'Vincular parámetros',
        descriptionText: 'Parámetros de informe',
        addText: 'AÑADIR',
        ok: 'OK',
        cancel: 'Cancelar',
        nameWaterMark: 'Nombre de parámetro',
        valueWaterMark: 'Valor',
        errorMessage: 'Ingresar un valor para esta propiedad',
        closeToolTip: 'Cerrar'
    },
    filter: {
        title: 'Filtro',
        descriptionLable: 'Incluir filas donde las siguientes condiciones sean verdaderas',
        add: 'AÑADIR',
        ok: 'OK',
        cancel: 'Cancelar',
        valueWaterMark: 'Valor',
        fieldWaterMark: 'Escoger campo',
        closeToolTip: 'Cerrar',
        deleteField: 'Borrar campo',
        errorMessage: {
            booleanValidation: 'El valor no es un valor booleano',
            intValidation: 'El valor no es un entero',
            floatValidation: 'El valor no es un flotante.',
            dateTimeValidation: 'El valor no es un formato válido de fecha/hora.',
            topBottomFilter: 'Los operadores de filtro Superior % e Inferior % requieren un tipo de dato flotante o entero.',
            expressionValidation: 'Seleccionar valor para el campo de expresión'
        },
        operatorTypes: {
            like: 'Como',
            topN: 'SuperiorN',
            bottomN: 'InferiorN',
            topPercent: 'Superior%',
            bottomPercent: 'Inferior%',
            between: 'Entre',
            inFilter: 'En',
        }
    },
    dataField: {
        title: 'Campos de datos',
        descriptionLable: 'Incluir filas de campo de datos',
        add: 'AÑADIR',
        ok: 'OK',
        cancel: 'Cancelar',
        deleteField: 'Borrar campo',
        fieldNameWaterMark: 'Nombre de campo',
        closeToolTip: 'Cerrar',
        errorMessages: {
            emptyField: 'Especificar nombre de campo',
            invalidCharacters: 'El nombre de campo no debe contener espacios ni caracteres especiales',
            sameCharacter: 'El nombre de campo ya existe'
        },
        dsNameLabel: 'Nombre',
        dsNameWaterMark: 'Nombre de dato',
        dsNameValidation: {
            emptyName: 'Especificar nombre del conjunto de datos',
            duplicateName: 'El nombre especificado ya existe en la lista de conjunto de datos',
            specialCharacter: 'El nombre del conjunto de datos no debe contener espacios ni caracteres especiales'
        }
    },
    dataPanel: {
        itemTooltip: {
            properties: 'PROPIEDADES',
            data: 'Datos',
            parameters: 'Parámetros',
            imageManager: 'GESTOR DE IMÁGENES',
            expand: 'Expandir',
            collapse: 'Reducir'
        },
        dataSourceNewAlert: {
            title: 'Fuente de datos',
            contentMessage: '¿Quieres cancelar la creación de la fuente de datos?',
        },
        dataSourceEditAlert: {
            title: 'Fuente de datos',
            contentMessage: '¿Quieres cancelar la edición de la fuente de datos?',
        },
        dataSetNewAlert: {
            title: 'Conjunto de datos',
            contentMessage: '¿Quieres cancelar la creación del conjunto de datos?',
        },
        dataSetEditAlert: {
            title: 'Conjunto de datos',
            contentMessage: '¿Quieres cancelar la edición del conjunto de datos?',
        },
        parameterNewAlert: {
            title: 'Parámetro',
            contentMessage: '¿Quieres cancelar la creación del parámetro?',
        },
        parameterEditAlert: {
            title: 'Parámetro',
            contentMessage: '¿Quieres cancelar la edición del parámetro?',
        },
        licenseAlert: {
            ok: 'OK',
            close: 'Cerrar',
        }
    },
    dataSet: {
        headerText: 'DATOS',
        newData: 'Añadir conjunto de datos',
        switchLabel: 'Cambiar al panel de fuente de datos',
        toggleCollapse: 'Botón para contraer los campos del conjunto de datos',
        toggleExpand: 'Botón para expandir los campos del conjunto de datos',
        datasetLabel: 'Nombre de conjunto de datos',
        fieldsLabel: 'Nombre de campo',
        dataSearch: 'Búsqueda de campos de conjuntos de datos',
        shareDataset: {
            headerText: 'NUEVO CONJUNTO DE DATOS',
            editHeaderText: 'EDITAR CONJUNTO DE DATOS',
            save: 'Guardar',
            cancel: 'Cancelar',
            nameLable: 'Nombre',
            sharedDatasetLabel: 'Conjunto de datos compartido',
            errorMessage: {
                nameValidation: 'Especificar nombre del conjunto de datos',
                datasetValidation: 'Seleccionar una fuente de datos compartida',
                duplicateName: 'El nombre especificado ya existe en la lista de conjuntos de datos',
                specialCharacter: 'El nombre no debe contener espacios ni caracteres especiales'
            }
        },
        contextMenu: {
            edit: 'Editar',
            remove: 'Eliminar',
            cloneDataset: 'Clonar',
            refreshDataset: 'Actualizar',
            filter: 'Filtro',
            setField: 'Campos',
            parameter: 'Parámetros'
        },
        datasourceSwitcher: 'FUENTES DE DATOS',
        deleteDataset: 'Eliminar conjunto de datos',
        deleteField: 'Borrar campo',
        newDataText: 'Nuevo dato',
        sharedDataText: 'Dato compartido',
        dataRestriction: {
            dsCreateRestriction: 'Se ha restringido la creación de fuentes de datos',
            title: 'Datos'
        },
        dataFieldSearch: {
            errorMessage: 'No se han encontrado coincidencias',
            searchText: 'Buscar'
        },
        dataTab: {
            dataSourceTabHeader: 'Fuente de datos',
            dataSetTabHeader: 'CONJUNTO DE DATOS'
        }
    },
    reportViewer: {
        toolbar: {
            print: {
                headerText: 'Imprimir',
                contentText: 'Imprimir informe'
            },
            exportformat: {
                headerText: 'Exportar',
                contentText: 'Seleccionar formato de archivo exportado',
                Pdf: 'PDF',
                Excel: 'Excel',
                Word: 'Word',
                Html: 'HTML',
                PPT: 'PowerPoint',
                CSV: 'CSV',
                XML: 'XML'
            },
            first: {
                headerText: 'Ir a la primera',
                contentText: 'Ir a la primera página del informe'
            },
            last: {
                headerText: 'Ir a la última',
                contentText: 'Ir a la última página del informe'
            },
            next: {
                headerText: 'Ir a la siguiente',
                contentText: 'Ir a la siguiente página del informe'
            },
            previous: {
                headerText: 'Ir a la anterior',
                contentText: 'Ir a la página anterior del informe'
            },
            back: {
                headerText: 'Ir al padre',
                contentText: 'Ir al informe padre'
            },
            documentMap: {
                headerText: 'Mapa de documento',
                contentText: 'Mostrar u ocultar el mapa del documento'
            },
            parameter: {
                headerText: 'Parámetro',
                contentText: 'Mostrar u ocultar el panel de parámetros'
            },
            zoomIn: {
                headerText: 'Acercar',
                contentText: 'Hacer zoom al informe'
            },
            zoomOut: {
                headerText: 'Alejar',
                contentText: 'Alejar el informe'
            },
            refresh: {
                headerText: 'Actualizar',
                contentText: 'Actualizar informe'
            },
            stop: {
                headerText: 'Detener',
                contentText: 'Detener el procesamiento del informe'
            },
            printLayout: {
                headerText: 'Imprimir diseño',
                contentText: 'Cambiar entre imprimir diseño y los modos normales'
            },
            pageIndex: {
                headerText: 'Número de página',
                contentText: 'Ver número de página actual'
            },
            zoom: {
                headerText: 'Zoom',
                contentText: 'Hacer zoom o alejar el informe'
            },
            fittopage: {
                headerText: 'Ajustar a página',
                contentText: 'Ajustar página de reporte al contenedor',
                pageWidth: 'Ancho de página',
                pageHeight: 'Página completa'
            },
            pagesetup: {
                headerText: 'Ajustes de página',
                contentText: 'Seleccionar la opción de ajustes de página para cambiar el tamaño, la orientación y los márgenes'
            },
            exportsetup: {
                headerText: 'Ajustes de exportación',
                contentText: 'Seleccionar la opción de ajustes de exportación para establecer la calidad de la imagen'
                    + 'guardar tipo de documento word y excel'
            },
            find: {
                headerText: 'Encontrar',
                contentText: 'Encontrar texto en el informe'
            },
            performance: {
                headerText: 'Métricas de rendimiento',
                contentText: 'Se muestran las métricas de rendimiento del informe.',
            },
            viewDesign: 'Cerrar vista previa',
        },
        PerformanceMetricsDialog: {
            title: 'Métricas de rendimiento de informes',
            reportProcessing: 'Tiempo de procesamiento del informe',
            datasetProcessing: 'Tiempo de procesamiento del conjunto de datos',
            parse: 'Tiempo de análisis',
            evaluate: 'evaluar el tiempo',
            render: 'Tiempo de renderizado',
            layout: 'Tiempo de diseño',
            datasetDetails: {
                rows: 'Recuento de filas',
                dataRetrival: 'Tiempo de recuperación de datos'
            },
        },
        pagesetupDialog: {
            close: 'Cerrar',
            paperSize: 'Tamaño de papel',
            height: 'Alto',
            width: 'Ancho',
            margins: 'Márgenes',
            top: 'Superior',
            bottom: 'Inferior',
            right: 'Derecha',
            left: 'Izquierda',
            pageUnits: 'Unidades de página',
            unitin: 'In',
            unitcm: 'cm',
            inches: 'Pulgadas',
            centimeters: 'Centímetros',
            paperTypes: [
                { text: 'A3', value: 'A3' },
                { text: 'A4', value: 'A4' },
                { text: 'B4(JIS)', value: 'B4(JIS)' },
                { text: 'B5(JIS)', value: 'B5(JIS)' },
                { text: 'Sobre #10', value: 'Sobre #10' },
                { text: 'Sobre monarca', value: 'Sobre monarca' },
                { text: 'Ejecutivo', value: 'Ejecutivo' },
                { text: 'Legal', value: 'Legal' },
                { text: 'Carta', value: 'Carta' },
                { text: 'Tabloide', value: 'Tabloide' },
                { text: 'Personalizado', value: 'Personalizado' }
            ],
            orientation: 'Orientación',
            portrait: 'Vertical',
            landscape: 'Horizontal',
            doneButton: 'OK',
            cancelButton: 'Cancelar'
        },
        exportsetupDialog: {
            close: 'Cerrar',
            commonOptions: {
                header: 'Ajustes comunes',
                imageQuality: 'Calidad de imagen',
                imageQualityTypes: [{ text: 'Bajo', value: '2' },
                    { text: 'Medio', value: '5' },
                    { text: 'Alto', value: '10' }],
                usePrintSizes: 'Ajustes para el uso de la página de impresión'
            },
            pdfOptions: {
                header: 'Ajustes PDF',
                complexScript: 'Guión complejo',
                conformance: 'Nivel de conformidad',
                conformanceTypes: [
                    { text: 'Ninguno', value: 0 },
                    { text: 'Pdf/A1B', value: 1 },
                    { text: 'Pdf/X1A2001', value: 2 },
                    { text: 'Pdf/A2B', value: 3 },
                    { text: 'Pdf/A3B', value: 4 },
                    { text: 'Pdf/A1A', value: 5 },
                    { text: 'Pdf/A2A', value: 6 },
                    { text: 'Pdf/A2U', value: 7 },
                    { text: 'Pdf/A3A', value: 8 },
                    { text: 'Pdf/A3U', value: 9 }
                ],
            },
            securityOptions: {
                header: 'Ajustes de seguridad',
                enableProtection: 'Habilitar protección',
                protect: 'Contraseña para proteger',
                edit: 'Contraseña para editar'
            },
            wordOptions: {
                header: 'Ajustes de Word',
                protection: 'Tipo de protección',
                topSpacing: 'Espaciado superior',
                bottomSpacing: 'Espaciado inferior',
                formatList: [
                    { text: 'Documento Word 97-2003 (.doc)', value: 0 },
                    { text: 'Plantilla Word 97-2003 (.dot)', value: 1 },
                    { text: 'Documento Word (.docx)', value: 2 },
                    { text: 'Documento Strict Open XML 2007 (.docx)', value: 3 },
                    { text: 'Documento Strict Open XML 2010 (.docx)', value: 4 },
                    { text: 'Documento Strict Open XML 2013 (.docx)', value: 5 },
                    { text: 'Plantilla Strict Open XML 2007 (.dotx)', value: 6 },
                    { text: 'Plantilla Strict Open XML 2010 (.dotx)', value: 7 },
                    { text: 'Plantilla Strict Open XML 2013 (.dotx)', value: 8 },
                    { text: 'Documento Word Habilitado para macros 2007 (.docm)', value: 9 },
                    { text: 'Documento Word Habilitado para macros 2010 (.docm)', value: 10 },
                    { text: 'Documento Word Habilitado para macros 2013 (.docm)', value: 11 },
                    { text: 'Plantilla Word Habilitada para macros 2007 (.dotm)', value: 12 },
                    { text: 'Plantilla Word Habilitada para macros 2010 (.dotm)', value: 13 },
                    { text: 'Plantilla Word Habilitada para macros 2013 (.dotm)', value: 14 },
                    { text: 'Rich text format (.rtf)', value: 15 },
                    { text: 'Plain text (.txt)', value: 16 },
                    { text: 'Web page (.html)', value: 18 }
                ],
                layoutTypes: [
                    { text: 'Predeterminado', value: 0 },
                    { text: 'Nivel superior', value: 1 }
                ],
                protectionTypes: [
                    { text: 'No Protection', value: -1 },
                    { text: 'Permitir solo revisiones', value: 0 },
                    { text: 'Permitir solo comentarios', value: 1 },
                    { text: 'Permitir solo campos de forma', value: 2 },
                    { text: 'Permitir solo lectura', value: 3 }
                ],
            },
            layoutOption: 'Opciones de diseño',
            saveType: 'Guardar tipo',
            pptOptions: {
                header: 'Ajustes de PowerPoint',
                pptTypes: [
                    { text: 'Presentación PowerPoint 97 a 2003 (.pptx)', value: 0 },
                    { text: 'Presentación PowerPoint 2007 (.pptx)', value: 1 },
                    { text: 'Presentación PowerPoint 2010 (.pptx)', value: 2 },
                    { text: 'Presentación PowerPoint 2013 (.pptx)', value: 3 }
                ]
            },
            doneButton: 'OK',
            cancelButton: 'Cancelar',
            csvOptions: {
                formatter: 'Valores formateados',
                header: 'Ajustes CSV',
                delimiter: 'Delimitador de campo',
                qualifier: 'Calificador de texto',
                customVal: 'Valor personalizado',
                qualifierList: [
                    { text: 'Comillas dobles', value: '"' },
                    { text: 'Comillas sencillas', value: '\'' },
                    { text: 'Ninguno', value: '' },
                    { text: 'Personalizado', value: 'Personalizado' }
                ],
                delimiterList: [
                    { text: 'Coma', value: ',' },
                    { text: 'Espacio', value: ' ' },
                    { text: 'Tabulación', value: '   ' },
                    { text: 'Punto y coma', value: ';' },
                    { text: 'Personalizado', value: 'Personalizado' }
                ]
            },
            htmlOptions: {
                header: 'Ajustes HTML',
                separator: 'Separador de página'
            },
            excelOptions: {
                header: 'Ajustes de excel',
                sheetProtection: 'Protección de hoja',
                disableCellFormat: 'Deshabilitar formato de celda',
                readonly: 'Solo lectura',
                saveTypes: [
                    { text: 'Libro de Excel 97 a 2003 (.xls)', value: 0 },
                    { text: 'Libro de Excel 2007 (.xlsx)', value: 1 },
                    { text: 'Libro de Excel 2010  (.xlsx)', value: 2 },
                    { text: 'Libro de Excel 2013  (.xlsx)', value: 3 },
                    { text: 'Libro de Excel 2016 (.xlsx) ', value: 4 }
                ],
                sheetProtectionTypes: [
                    { text: 'Ninguno', value: 0 },
                    { text: 'Objetos', value: 1 },
                    { text: 'Escenario', value: 2 },
                    { text: 'Formato de celdas', value: 4 },
                    { text: 'Formato de columnas', value: 8 },
                    { text: 'Formato de filas', value: 16 },
                    { text: 'Insertar columnas', value: 32 },
                    { text: 'Insertar filas', value: 64 },
                    { text: 'Insertar hipervínculos', value: 128 },
                    { text: 'Eliminar columnas', value: 256 },
                    { text: 'Eliminar filas', value: 512 },
                    { text: 'Celdas bloqueadas', value: 1024 },
                    { text: 'Ordenar', value: 2048 },
                    { text: 'Filtros', value: 4096 },
                    { text: 'Uso de tablas dinámicas', value: 8192 },
                    { text: 'Celdas desbloqueadas', value: 16384 },
                    { text: 'Contenido', value: 32768 },
                    { text: 'Todo', value: 65535 }
                ],
                disableCellFormatTypes: [
                    { text: 'Ninguno', value: 0 },
                    { text: 'Todo', value: 1 },
                    { text: 'Borde', value: 2 },
                    { text: 'Estilo', value: 3 }
                ],
                layoutOptionTypes: [
                    { text: 'Predeterminado', value: 0 },
                    { text: 'Ignorar combinar celda', value: 2 }
                ],
            }
        },
        findAlertMessage: {
            resultsEndReached: 'Has llegado al final de los resultados de la búsqueda. Para continuar, '
                + 'cierra el cuadro de diálogo y vuelve a buscar.',
            noResultsFound: 'El texto especificado no coincide con ninguno de los contenidos en el informe. '
                + 'Cambia la palabra clave de búsqueda y vuelve a intentarlo.'
        },
        credential: {
            userName: 'Nombre de usuario',
            password: 'Contraseña'
        },
        waterMark: {
            selectOption: 'Seleccionar opción',
            selectValue: 'Seleccionar un valor'
        },
        errorMessage: {
            startMessage: 'El visualizador de informes ha tenido problemas al cargar este informe. Por favor ',
            middleMessage: 'Haz clic aquí',
            endMessage: 'para ver los detalles del error',
            closeMessage: 'Cerrar este mensaje',
            licenseMsgWeb: 'La licencia Bold no está registrada en su aplicación. Utilice una licencia válida para eliminar permanentemente este mensaje de validación de licencia. También puede obtener una licencia de evaluación gratuita de 30 días para eliminar temporalmente este mensaje durante el período de evaluación. Consulte este tema de ayuda. (https://help.boldreports.com/licensing/licensing-errors/#license-key-not-registered) para más información.',
            licenseMsgNetCore: 'Esta aplicación se creó utilizando una versión de prueba de Bold. Utilice una licencia válida para eliminar permanentemente este mensaje de validación de licencia. También puede obtener una licencia de evaluación gratuita de 30 días para eliminar temporalmente este mensaje durante el período de evaluación. Consulte este tema de ayuda. (https://help.boldreports.com/licensing/licensing-errors/#license-key-not-registered) para más información.',
            exportAjaxFailureMsg: 'No se ha podido exportar el documento debido a un fallo en la conexión del servicio de informes.',
            printAjaxFailureMsg: 'No se ha podido imprimir el documento debido a un fallo en la conexión del servicio de informes.',
            reportLoadAjaxFailureMsg: 'No se ha podido avanzar en la acción del informe debido a un fallo en la conexión del servicio de informes.',
            cancelReportProcessMsg: 'El procesamiento de informe fue cancelado'
        },
        progressMessage: {
            exportLoadingMessage: 'Exportando informe...',
            printLoadingMessage: 'Informe de impresión...',
            printPreparationMessage: 'Preparándose para imprimir datos... {0}% completado... Espere...',
            exportPreparationMessage: 'Preparándose para exportar el documento... {0}% completado... Por favor, espere...',
            cancelText: 'Cancelar',
        },
        alertMessage: {
            close: 'Cerrar',
            title: 'Visualizador de informes',
            done: 'OK',
            showDetails: 'Mostrar detalles',
            hideDetails: 'Ocultar detalles',
            reportLoad: 'Informe cargado:',
            RVERR0001: 'El visualizador de informes no pudo cargar el informe',
            RVERR0002: 'El visualizador de informes no pudo procesar el informe',
            RVERR0003: 'Se ha producido un error en la transmisión de datos ajax',
            RVERR0004: 'Seleccionar un valor para el parámetro',
            RVERR0005: 'Al parámetro {parameter name} le falta un valor',
            RVERR0006: 'Por favor, introducir la entrada del tipo de datos flotantes',
            RVERR0007: 'Ingresar la entrada del tipo de datos entero',
            RVERR0008: 'El visualizador de informes no pudo validar las credenciales de la fuente de datos',
            RVERR0009: 'Los márgenes están superpuestos o fuera del papel. Introduce un tamaño de margen diferente.',
            RVERR0010: 'Indicar un valor para el parámetro',
            RVERR0011: 'El parámetro no puede estar vacío',
            RVERR0012: 'El valor proporcionado para el parámetro de informe {parameterprompt} no es válido para su tipo.',
            RVERR0013: 'Introduzca valores para los parámetros.',
            RVERR0014: 'Los parámetros no pueden estar en blanco',
            RVERR0015: 'El valor requerido para los nombres de parámetros de',
        },
        reportItemLabel: {
            Tablix: 'Elemento de informe tablix',
            Textbox: 'Elemento de informe de la caja de texto',
            Chart: 'Elemento de informe del gráfico',
            Image: 'Elemento de informe de la imagen',
            Custom: 'Elemento de informe personalizado',
            Rectangle: 'Elemento de informe rectangular',
            Map: 'Elemento de informe del mapa',
            Gauge: 'Elemento de informe de calibre',
            Indicator: 'Elemento de informe del indicador',
            Line: 'Elemento de informe de línea',
            Subreport: 'Elemento del subinforme'
        },
        reportParameter: {
            operators: {
                equals: 'igual',
                notEqualTo: 'No igual a',
                lessThan: 'Menos que',
                greaterThan: 'Mas grande que',
                lessOrEqual: 'menor o igual',
                greaterOrEqual: 'Mayor o igual',
                contains: 'Contiene',
                doesNotContain: 'No contiene',
                startsWith: 'Comienza con',
                endsWith: 'Termina con',
                is: 'Es',
                isNot: 'No es',
                in: 'En',
                notIn: 'No en',
                between: 'Entre',
                relative: 'Relativo'
            }
        },
        selectAll: 'Seleccionar todo',
        viewButton: 'Ver informe',
        parameterBlock: 'Bloqueo de parámetro',
        parameterProcessingMessage: 'Cargando valores de parámetros ...',
        parameterBlockTitle: 'Parámetros de informe'
    },
    sortData: {
        sorting: 'Ordenar',
        headerText: 'Ordenar filtro',
        add: 'AÑADIR',
        changeSortingOptions: 'Cambiar opciones de ordenación',
        sortBy: 'Ordenar por',
        thenBy: 'Luego por',
        direction: {
            ascending: 'Ascendente',
            descending: 'Descendente',
        },
        chooseField: 'Escoger campo',
        errorMessage: 'Seleccionar valor para el campo de expresión',
        ok: 'OK',
        cancel: 'Cancelar',
        close: 'Cerrar',
        deleteField: 'Borrar campo'
    },
    groupData: {
        grouping: 'Agrupamiento',
        headerText: 'Grupo',
        headerTextLabel: 'Etiqueta de grupo',
        name: 'Nombre',
        label: 'Etiqueta',
        changeGroupingOptions: 'Cambiar opciones de agrupamiento',
        add: 'AÑADIR',
        groupBy: 'Agrupar por',
        andOn: 'Y en',
        chooseField: 'Escoger campo',
        ok: 'OK',
        cancel: 'Cancelar',
        close: 'Cerrar',
        errorMessage: {
            duplicateName: 'Por favor, introduce el nombre válido',
            emptyValueValidation: 'Seleccionar valor para el campo de expresión',
            invalidCharacterValidation: 'El nombre no debe contener espacios ni caracteres especiales'
        },
        deleteField: 'Borrar campo'
    },
    alertMessage: {
        yes: 'Si',
        no: 'No',
        ok: 'OK',
        showDetails: 'Mostrar detalles',
        hideDetails: 'Ocultar detalles',
        close: 'Cerrar'
    },
    parameter: {
        listPanel: {
            headerText: 'Parámetros',
            newParameter: 'NUEVO PARÁMETRO',
            submenu: {
                edit: 'Editar',
                remove: 'Eliminar'
            },
            alertTitle: 'Parámetro'
        },
        configurationPanel: {
            newHeaderText: 'NUEVO PARÁMETRO',
            editHeaderText: 'EDITAR PARÁMETRO',
            nameLabel: 'Nombre',
            promptLable: 'Prompt',
            dataTypeLable: 'Tipo de dato',
            blankValueLable: 'Permitir valor en blanco ("")',
            nullValueLable: 'Permitir valor nulo',
            multipleValueLable: 'Permitir valores múltiples',
            uniqueValueLabel: 'Mostrar valores únicos',
            sortValueLabel: 'Habilitar ordenar',
            visibilityLable: 'Visibilidad',
            assignValueLable: 'Asignar valores >>',
            save: 'Guardar',
            cancel: 'Cancelar',
            editLayout: 'Editar diseño',
            sorting: {
                ascending: 'Ascendente',
                descending: 'Descendente'
            },
            visibility: {
                visible: 'Visible',
                hidden: 'Oculto',
                internal: 'Interno'
            },
            dataType: {
                stringType: 'Cadena',
                booleanType: 'Booleano',
                dateTimeType: 'Fecha hora',
                integerType: 'Entero',
                floatType: 'Flotante'
            }
        },
        errorMessage: {
            nameField: 'Por favor, ingresar nombre',
            promptField: 'Por favor, ingresar valor',
            nameAlreadyExists: 'El nombre del parámetro ya existe'
        },
        warningMessage: {
            specialCharacter: 'El nombre no debe contener espacios ni caracteres especiales',
            multipleValueAlert: 'Se han especificado múltiples valores por defecto. El parámetro no permite valores múltiples.',
            nullValueAlert: 'En el campo de valor, se especificó un valor nulo. El parámetro no permite valores nulos. '
        },
        alertMessage: {
            confirmNullCheck: 'Los valores disponibles o por defecto pueden contener un valor nulo, ¿quieres activar la casilla permitir valores nulos?',
            confirmBlankValue: 'Los valores disponibles o por defecto pueden contener un valor en blanco, ¿quieres activar la casilla de verificación del valor en blanco?',
            dataTypeChange: 'Al cambiar el tipo de datos se descartarán los cambios realizados en los valores disponibles y por defecto. ¿Quieres cambiar el tipo de datos de todos modos?',
            deleteConfirmation: 'Eliminar parámetro de informe'
        },
        assignData: {
            title: 'Parámetro',
            availableValue: 'Valor disponible',
            defaultValue: 'Valor por defecto',
            none: 'Ninguno',
            specify: 'Especificar',
            query: 'Valor de consulta',
            ok: 'OK',
            cancel: 'Cancelar',
            availableFields: {
                specifyDescriptionText: 'Añadir los valores disponibles para los parámetros:',
                queryDescriptionText: 'Seleccionar el conjunto de datos y los campos para los valores disponibles:',
                nameFieldWaterMark: 'Etiqueta',
                valueFieldWaterMark: 'Valor'
            },
            defaultFields: {
                specifyDescriptionText: 'Añadir los valores por defecto de los parámetros:',
                queryDescriptionText: 'Seleccionar el conjunto de datos y los campos para los valores por defecto:',
                defValueWaterMark: 'Seleccionar valor por defecto'
            },
            datasetWaterMark: 'Seleccionar valor de conjunto de datos',
            valueWaterMark: 'Seleccionar valor',
            lableWaterMark: 'Seleccionar etiqueta',
            add: 'AÑADIR',
            datasetLableText: 'Conjunto de datos',
            valueLableText: 'Campo de valor',
            labelFieldText: 'Campo de etiqueta',
            errorMessage: {
                boolTypeCheck: 'El valor no es un valor booleano',
                dateTypeCheck: 'El valor es un formato de fecha no válido.',
                intTypeCheck: 'El valor no es un entero',
                floatTypeCheck: 'El valor no es un flotante.',
                multipleValuesCheck: 'Un parámetro multivalor no puede incluir valores nulos',
                emptyDatasetField: 'El campo conjunto de datos es obligatorio.',
                emptyDatasetValue: 'El campo valor es obligatorio.',
                labelFieldSyntax: 'El valor introducido en el campo de etiqueta no es una sintaxis de token válida.',
                valueFieldSyntax: 'El valor introducido en el campo de valor no es una sintaxis de token válida.',
                emptyValue: 'El campo de valor está vacío. El parámetro no permite valores en blanco.',
                nullValue: 'En el campo de valor, se especificó un valor nulo. El parámetro no permite valores nulos. '
            },
            closeToolTip: 'Cerrar',
            deleteField: 'Borrar campo'
        }
    },
    formatData: {
        title: 'Diálogo de formato',
        typeSelect: 'Tipo',
        typeFormat: {
            numberType: {
                labelText: 'Número',
                decimalPlaces: 'Ubicación de decimales',
                decimalWatermark: 'Ingresar valor',
                negativeValues: 'Valores negativos',
                showZeroAs: {
                    showZeroAs: 'Mostrar cero como',
                    none: '(ninguno)'
                },
                representationLabel: 'Representación',
                representationTypes: {
                    thousands: 'Miles',
                    millions: 'Millones',
                    billions: 'Miles de millones',
                },
                useRegionFormating: 'Utilizar formato regional',
                use1000Separator: 'Para separar 1000, usar (,)'
            },
            currency: {
                labelText: 'Moneda',
                decimalPlaces: 'Ubicación de decimales',
                negativeValues: 'Valores negativos',
                culture: 'Cultura de moneda',
                showZeroAs: {
                    none: '(ninguno)'
                },
                representationLabel: 'Representación',
                representationTypes: {
                    thousands: 'Miles',
                    millions: 'Millones',
                    billions: 'Miles de millones',
                },
                useRegionFormating: 'Utilizar formato regional',
                use1000Separator: 'Para separar 1000, usar (,)',
                includeSpace: 'Incluir un espacio'
            },
            date: {
                typeLabel: 'Fecha',
                valueTypeLabel: 'Fecha'
            },
            time: {
                typeLabel: 'Hora',
                valueTypeLabel: 'Hora'
            },
            percentage: {
                typeLabel: 'Por ciento',
                decimalPlaces: 'Ubicación de decimales',
                includeSpace: 'Incluir un espacio'
            },
            scientific: {
                typeLabel: 'Científico',
                decimalPlaces: 'Ubicación de decimales'
            },
            custom: {
                typeLabel: 'Personalizado',
                customFormat: 'Formato personalizado'
            },
        },
        preview: 'Vista previa',
        ok: 'OK',
        cancel: 'Cancelar',
        close: 'Cerrar',
        deleteField: 'Borrar campo'
    },
    expression: {
        title: 'Expresión',
        descriptionText: 'Establecer expresión para: ',
        optionLabel: 'Opciones',
        dataLabel: 'Datos',
        descritionLabel: 'Descripción',
        exampleLabelText: 'Ejemplo',
        ok: 'OK',
        cancel: 'Cancelar',
        closeToolTip: 'Cerrar',
        textAreaWaterMark: 'Expresión',
        category: {
            builtInFields: 'Campos integrados',
            operators: 'Operadores',
            functions: 'Funciones'
        },
        parameters: 'Parámetros',
        variables: 'Variables',
        optionWaterMark: 'Seleccionar una opción',
        dataWaterMark: 'Seleccionar un dato',
        reportData: 'No se encontró informe de datos',
        description: {
            executionTime: 'Fecha y hora que los informes comienzan a operar',
            overallPageNumber: 'El número actual total de página puede ser usado en el encabezado o en el pie de página',
            overallTotalPages: 'El número total de páginas puede ser usado solo en el encabezado o en el pie de página',
            pageName: 'El nombre de la página actual en el informe puede ser usado solo en el encabezado o en el pie de página',
            pageNumber: 'El número de página actual puede ser reiniciado usando saltos de páginas',
            reportFolder: 'La ruta completa de la carpeta que almacena el informe no incluye la URL del servidor del informe',
            reportName: 'La variable contiene el nombre del informe actual.',
            reportServerUrl: 'URL del servidor del informe el cual dicho informe comienza a operar',
            totalPages: 'El número total de páginas en la secuencia continua de páginas actual sólo puede utilizarse en el encabezado y pie de página. El número se puede restablecer mediante saltos de página.',
            language: 'El ID de idioma del cliente que ejecuta el informe.',
            userID: 'El ID del usuario que ejecuta el informe.',
            powerNumberType: 'Eleva un número a la potencia de otro número.',
            multiply: 'Multiplica dos números.',
            integerDivision: 'Divide dos números y devuelve un entero.',
            floatDivision: 'Divide dos números y devuelve un punto flotante.',
            modulus: 'Divide dos números y devuelve sólo el resto.',
            add: 'Suma dos números y se puede utilizar para concatenar dos cadenas.',
            difference: 'Da la diferencia entre dos números o indica el valor negativo de una expresión numérica.',
            lesser: 'Menor que.',
            lesserOrEqual: 'Menor que o igual que.',
            greater: 'Mayor que.',
            greaterOrEqual: 'Mayor que o igual que.',
            equal: 'Igual que.',
            notEqual: 'No es igual que.',
            like: 'Compara dos cadenas',
            isOperator: 'Compara dos variables de referencia de objeto.',
            expression: 'Genera una concatenación de cadenas de dos expresiones.',
            stringType: 'Suma dos números, y se puede utilizar para concatenar dos cadenas.',
            and: 'Lleva a cabo una conjunción lógica sobre dos expresiones booleanas, o una conjunción bit a bit sobre dos ',
            not: 'Lleva a cabo la negación lógica de una expresión booleana, o la negación bit a bit de una expresión numérica.',
            or: 'Se utiliza para realizar una disyunción lógica sobre dos expresiones booleanas, o una disyunción bit a bit sobre dos valores numéricos.',
            xor: 'Realiza una operación de exclusión lógica sobre dos expresiones booleanas, o una exclusión bit a bit sobre dos expresiones numéricas.',
            andAlso: 'Lleva a cabo una conjunción lógica de cortocircuito en dos expresiones.',
            orElse: 'Se utiliza para realizar la disyunción lógica de cortocircuito en dos expresiones.',
            left: 'Realiza un desplazamiento aritmético a la izquierda sobre un patrón de bits.',
            right: 'Realiza un desplazamiento aritmético a la derecha sobre un patrón de bits.',
            asc: 'Devuelve un valor entero que representa el código de carácter correspondiente a un carácter.',
            ascW: 'Devuelve un valor entero que representa el código de carácter correspondiente a un carácter.',
            chr: 'Devuelve el carácter asociado al código de carácter especificado.',
            chrW: 'Devuelve el carácter asociado al código de carácter especificado.',
            filter: 'Devuelve un array de base cero que contiene un subconjunto de un array de cadenas basado en los criterios de filtrado especificados.',
            formatStringType: 'Devuelve una cadena formateada según las instrucciones de una expresión de formato de cadena.',
            currency: 'Devuelve una expresión formateada como valor monetario utilizando el símbolo de moneda definido en el panel de control del sistema.',
            dateTime: 'Devuelve una expresión de cadena que representa un valor de fecha/hora.',
            numberType: 'Devuelve una expresión formateada como un número.',
            percent: 'Devuelve una expresión formateada como porcentaje (es decir, multiplicada por 100).',
            getChar: 'Devuelve un valor char que representa el carácter del índice especificado en la cadena suministrada.',
            inStr: 'Devuelve un entero que especifica la posición inicial de la primera aparición de una cadena dentro de otra.',
            inStrRev: 'Devuelve la posición de la primera aparición de una cadena dentro de otra, empezando por el lado derecho de la cadena.',
            join: 'Devuelve una cadena creada uniendo un número de subcadenas en un array.',
            lCase: 'Devuelve una cadena o carácter convertido a minúsculas.',
            leftStringType: 'Devuelve una cadena que contiene un número especificado de caracteres del lado izquierdo de una cadena.',
            stringLength: 'Devuelve un número entero que contiene el número de caracteres de una cadena o el número de bytes necesarios para almacenar una variable.',
            lSet: 'Devuelve una cadena alineada a la izquierda que contiene la cadena especificada ajustada a la longitud establecida.',
            leftTrim: 'Devuelve la cadena sin espacios finales a la izquierda en la cadena dada.',
            middle: 'Devuelve una cadena que contiene un número especificado de caracteres de una cadena.',
            replace: 'Devuelve una cadena en la que una subcadena especificada ha sido reemplazada por otra subcadena un número específico de veces.',
            rightString: 'Devuelve una cadena que contiene un número especificado de caracteres de la parte derecha de una cadena.',
            rightSet: 'Devuelve una cadena alineada a la derecha que contiene la cadena especificada ajustada a la longitud especificada.',
            rightTrim: 'Devuelve la cadena sin espacios finales a la derecha en la cadena dada.',
            stringSpace: 'Devuelve una cadena formada por el número de espacios especificado.',
            splitString: 'Devuelve una matriz unidimensional de base cero que contiene un número especificado de subcadenas.',
            strComp: 'Devuelve -1, 0 o 1, según el resultado de una comparación de cadenas.',
            strConv: 'Devuelve una cadena convertida como se especifica.',
            duplicateString: 'Devuelve una cadena u objeto consistente en el carácter especificado repetido el número de veces especificado.',
            strReverse: 'Devuelve una cadena en la que se invierte el orden de los caracteres de una cadena especificada.',
            trim: 'Devuelve la cadena sin espacios finales en la cadena dada',
            upperCase: 'Devuelve una cadena o carácter que contiene la cadena especificada convertida a mayúsculas.',
            cDate: 'Convertir a fecha',
            dateAdd: 'Devuelve un valor de fecha que contiene valores de fecha y hora a los que se ha añadido un intervalo de tiempo especificado.',
            dateDiff: 'Devuelve un valor largo que especifica el número de intervalos de tiempo entre dos valores de fecha.',
            datePart: 'Devuelve un valor entero que contiene el componente especificado de un valor de fecha dado.',
            dateSerial: 'Devuelve un valor de fecha que representa un año, mes y día especificados, con la información horaria establecida en medianoche (00:00:00).',
            dateString: 'Devuelve o establece un valor de cadena que representa la fecha actual según tu sistema.',
            dateValue: 'Devuelve un valor de fecha que contiene la información de fecha representada por una cadena, con la información de hora.',
            day: 'Devuelve un valor entero del 1 al 31 que representa el día del mes.',
            format: 'Devuelve una expresión de cadena que representa un valor de fecha/hora.',
            hour: 'Devuelve un valor entero de 0 a 23 que representa la hora del día.',
            minute: 'Devuelve un valor entero de 0 a 59 que representa el minuto de la hora.',
            month: 'Devuelve un valor entero del 1 al 12 que representa el mes del año.',
            monthName: 'Devuelve un valor de cadena que contiene el nombre del mes especificado.',
            now: 'Devuelve un valor de fecha que contiene la fecha y hora actuales según tu sistema.',
            second: 'Devuelve un valor entero de 0 a 59 que representa el segundo del minuto.',
            timeOfDay: 'Devuelve o establece un valor de fecha que contiene la hora actual del día según tu sistema.',
            timer: 'Devuelve un valor doble que representa el número de segundos transcurridos desde medianoche.',
            timeSerial: 'Devuelve un valor de fecha que representa una hora, minuto y segundo especificados, con la información de la fecha establecida relativa al 1 de enero del año 1.',
            timeString: 'Devuelve o establece un valor de cadena que representa la hora actual del día según tu sistema.',
            timeValue: 'Devuelve un valor de fecha que contiene la información horaria representada por una cadena, con la información de fecha establecida al 1 de enero del año 1.',
            timeToday: 'Devuelve o establece un valor de fecha que contiene la fecha actual según tu sistema.',
            timeWeekday: 'Devuelve un valor entero que contiene un número que representa el día de la semana.',
            timeWeekdayName: 'Devuelve un valor de cadena que contiene el nombre del día de la semana especificado.',
            year: 'Devuelve un valor entero de 1 a 9999 que representa el año.',
            abs: 'Devuelve el valor absoluto de un número de coma flotante de precisión simple.',
            acos: 'Devuelve el ángulo cuyo coseno es el número especificado.',
            asin: 'Devuelve el ángulo cuyo seno es el número especificado.',
            atan: 'Devuelve el ángulo cuya tangente es el número especificado.',
            atan2: 'Devuelve el ángulo cuya tangente es el cociente de dos números especificados.',
            bigMultiply: 'Produce el producto completo de dos números de 32 bits.',
            ceiling: 'Devuelve el entero más pequeño que sea mayor o igual que el entero especificado.',
            cos: 'Devuelve el coseno del ángulo especificado.',
            cosh: 'Devuelve el coseno hiperbólico del ángulo especificado.',
            exponent: 'Devuelve e elevado a la potencia especificada.',
            fixNumberType: 'Devuelve una porción entera de un número.',
            floor: 'Devuelve el mayor entero menor o igual que el entero especificado.',
            integer: 'Devuelve una porción entera de un número.',
            logrithm: 'Devuelve el logaritmo natural (base e) de un número especificado.',
            logrithm10: 'Devuelve el logaritmo de base 10 de un número especificado.',
            maximum: 'Devuelve el valor máximo de todos los valores no nulos de la expresión especificada.',
            minimum: 'Devuelve el valor mínimo de entre todos los valores no nulos de la expresión especificada.',
            power: 'Devuelve un número especificado elevado a la potencia especificada.',
            random: 'Devuelve un número aleatorio de tipo único.',
            round: 'Redondea un valor de coma flotante de doble precisión al entero más cercano.',
            sign: 'Devuelve un valor que indica el signo de un entero con signo de 8 bits.',
            sin: 'Devuelve el seno del ángulo especificado.',
            sinh: 'Devuelve el seno hiperbólico del ángulo especificado.',
            squareRoot: 'Devuelve la raíz cuadrada de un número especificado.',
            tangent: 'Devuelve la tangente del ángulo especificado.',
            tangentH: 'Devuelve la tangente hiperbólica del ángulo especificado.',
            isArray: 'Devuelve un valor booleano que indica si la variable apunta a un array.',
            isDate: 'Devuelve un valor booleano que indica si una expresión representa un valor de fecha válido.',
            isNothing: 'Devuelve un valor booleano que indica si una expresión no tiene ningún objeto asignado.',
            isNumeric: 'Devuelve un valor booleano que indica si una expresión puede ser evaluada como un número.',
            flowChoose: 'Selecciona y devuelve un valor de una lista de argumentos.',
            flowIIf: 'Devuelve uno de dos objetos dependiendo de la evaluación de una expresión.',
            switchFlow: 'Evalúa una lista de expresiones y devuelve un valor de objeto correspondiente a la primera expresión de la lista que sea verdadera.',
            avg: 'Devuelve la media de todos los valores no nulos de la expresión especificada.',
            count: 'Devuelve un recuento de los valores de la expresión especificada.',
            countDistinct: 'Devuelve un recuento de todos los valores distintos de la expresión especificada.',
            countRows: 'Devuelve un recuento de filas dentro del ámbito especificado.',
            first: 'Devuelve el primer valor de la expresión especificada.',
            last: 'Devuelve el último valor de la expresión especificada.',
            standardDev: 'Devuelve la desviación estándar de todos los valores no nulos de la expresión especificada.',
            standardDevP: 'Devuelve la desviación estándar poblacional de todos los valores no nulos de la expresión especificada.',
            sum: 'Devuelve una suma de los valores de la expresión especificada.',
            variance: 'Devuelve la varianza de todos los valores no nulos de la expresión especificada.',
            varianceP: 'Devuelve la varianza poblacional de todos los valores no nulos de la expresión especificada.',
            runningValue: 'Utiliza una función especificada para devolver un agregado en ejecución de la expresión especificada.',
            aggregate: 'Devuelve un agregado personalizado de la expresión especificada, según lo definido por el proveedor de datos.',
            doubleDeclining: 'Devuelve un valor doble que especifica la depreciación de un activo para un período de tiempo específico utilizando el método de doble saldo decreciente o algún otro método que usted especifique.',
            futureValue: 'Devuelve un valor doble que especifica el valor futuro de una anualidad basada en pagos fijos periódicos, y un tipo de interés fijo.',
            interestPayment: 'Devuelve un valor doble que especifica el pago de intereses para un periodo determinado de una anualidad basada en pagos periódicos fijos y un tipo de interés fijo.',
            numberOfPeriods: 'Devuelve un valor doble que especifica el número de periodos de una anualidad basada en pagos fijos periódicos y un tipo de interés fijo.',
            annuityPayment: 'Devuelve un valor doble que especifica el pago de una anualidad basada en pagos periódicos fijos y un tipo de interés fijo.',
            principalPayment: 'Devuelve un valor doble que especifica el pago del principal para un periodo determinado de una anualidad basada en pagos fijos periódicos y un tipo de interés fijo.',
            presentValue: 'Devuelve un valor doble que especifica el valor actual de una anualidad basada en pagos periódicos fijos a pagar en el futuro y un tipo de interés fijo.',
            rateOfInterest: 'Devuelve un valor doble que especifica el tipo de interés por periodo de una anualidad.',
            straightLine: 'Devuelve un valor doble que especifica la depreciación lineal de un activo para un solo período.',
            sumOfYearsDigits: 'Devuelve un valor doble que especifica la depreciación de los dígitos de la suma de años de un activo para un período especificado.',
            convertBool: 'Convertir a booleano.',
            convertByte: 'Convertir a byte.',
            convertChar: 'Convertir a char.',
            convertDate: 'Convertir a fecha',
            convertDouble: 'Convertir a doble.',
            convertDecimal: 'Convertir a decimal.',
            convertInteger: 'Convertir a entero.',
            convertLong: 'Convertir a largo.',
            convertObject: 'Convertir a objeto.',
            convertShort: 'Convertir a corto.',
            convertSingle: 'Convertir a sencillo.',
            convertString: 'Convertir a cadena.',
            fix: 'Devuelve una porción entera de un número.',
            hexaDecimal: 'Devuelve una cadena que representa el valor hexadecimal de un número.',
            integerPortion: 'Devuelve una porción entera de un número.',
            octal: 'Devuelve una cadena que representa el valor octal de un número.',
            stringOfNumber: 'Devuelve una cadena que representa un número.',
            stringAsNumeric: 'Devuelve los números de una cadena como un valor numérico del tipo apropiado.',
            inScope: 'Devuelve verdadero si la instancia actual está dentro del ámbito especificado.',
            depthLevel: 'Devuelve un entero de base cero que representa el nivel de profundidad actual de una jerarquía recursiva.',
            lookup: 'Utiliza buscar para recuperar el valor del conjunto de datos especificado para un par nombre-valor en el que exista una relación 1 a 1. Por ejemplo, para un campo ID de una tabla, puedes utilizar buscar para recuperar el campo nombre correspondiente de un conjunto de datos que no esté vinculado a la región de datos.',
            lookupSet: 'Utiliza LookupSet para recuperar un conjunto de valores del conjunto de datos especificado para un par nombre-valor en el que exista una relación de 1 a muchos. Por ejemplo, para un identificador de cliente de una tabla, puedes utilizar LookupSet para recuperar todos los números de teléfono asociados a ese cliente de un conjunto de datos que no esté vinculado a la región de datos.',
            previous: 'Devuelve el valor de la expresión para la fila de datos anterior.',
            rowNumber: 'Devuelve un recuento en ejecución de todas las filas en el ámbito especificado.',
            renderInteractive: 'Un booleano que indica si la solicitud de renderizado actual utiliza un formato interactivo.',
            renderFormatName: 'El nombre del renderizador registrado en el archivo de configuración de ReportServer.'
        },
        errorMessage: {
            emptyValue: 'El valor no puede estar vacío',
            invalidValue: 'No es un valor válido'
        }
    },
    dataAssign: {
        measures: 'Medidas',
        dimensions: 'Dimensiones',
        addDataset: 'Añadir conjunto de datos',
        errorMessagePrefix: 'Aún no has configurado un conjunto de datos.',
        errorMessageSuffix: 'Añadir un conjunto de datos para vincular datos a elementos de informe en tu diseñador.',
        search: 'Buscar',
        dragOnDrop: 'Arrastrar y soltar',
        categoryList: 'Lista de categoría',
        removeDataField: 'Borrar campo de datos',
        dataFieldSettings: 'Ajustes del campo de datos',
        warningMessage: {
            title: 'Asignar datos',
            contentMessage: 'Añadir más de 5 {categoryName} causará un retraso en la visualización. ¿Quieres añadirlas de todos modos?'
        }
    },
    reportProperty: {
        header: 'Encabezado',
        body: 'Cuerpo',
        footer: 'Pie de página',
        report: 'Informe',
        basicSettings: {
            categoryName: 'Ajustes básicos',
            background: 'Color de fondo',
            borderTypes: {
                default: 'Borde',
                left: 'Izquierda',
                top: 'Superior',
                right: 'Derecha',
                bottom: 'Inferior'
            },
            borderStyles: {
                solid: 'Sólido',
                none: 'Ninguno',
                double: 'Doble',
                dashed: 'Guiones',
                dotted: 'Puntos'
            },
            borderProperties: {
                defaultColor: 'Color de borde',
                defaultSize: 'Tamaño de borde',
                defaultStyle: 'Estilo de borde',
                leftColor: 'Color de borde izquierdo',
                leftSize: 'Tamaño de borde izquierdo',
                leftStyle: 'Estilo de borde izquierdo',
                topColor: 'Color de borde superior',
                topSize: 'Tamaño de borde superior',
                topStyle: 'Estilo de borde superior',
                rightColor: 'Color de borde derecho',
                rightSize: 'Tamaño de borde derecho',
                rightStyle: 'Estilo de borde derecho',
                bottomColor: 'Color de borde inferior',
                bottomSize: 'Tamaño de borde inferior',
                bottomStyle: 'Estilo de borde inferior'
            }
        },
        generalSettings: {
            categoryName: 'General',
            printFirstPage: 'Imprimir en la primera página',
            printLastPage: 'Imprimir en la última página'
        },
        size: {
            sizeLabel: 'Tamaño',
            paddingTypes: {
                label: 'Relleno',
                left: 'Izquierda',
                top: 'Superior',
                right: 'Derecha',
                bottom: 'Inferior'
            }
        },
        position: {
            categoryName: 'Posición',
            label: 'Posición',
            left: 'Izquierda',
            top: 'Superior',
            sizeLabel: 'Tamaño',
            width: 'Ancho',
            height: 'Alto'
        },
        codeModule: {
            code: 'Código',
            variables: 'Variables'
        },
        margin: {
            categoryName: 'Margen',
            categoryHeader: 'Margen',
            types: {
                left: 'Izquierda',
                right: 'Derecha',
                bottom: 'Inferior',
                top: 'Superior'
            }
        },
        pageUnit: {
            header: 'Unidades de página',
            label: 'Unidad de página',
            types: {
                inches: 'Pulgadas',
                centimeters: 'Centímetros',
                pixels: 'Pixels',
                points: 'Puntos',
                millimeters: 'Milímetros',
                picas: 'Picas'
            }
        },
        columns: {
            header: 'Columna de página',
            label: 'Columnas',
            columnSpacing: 'Espaciado de columnas'
        },
        interactiveSize: {
            categoryName: 'Tamaño interactivo',
            enable: 'Habilitar',
            width: 'Ancho',
            height: 'Alto'
        },
        paperSize: {
            orientation: 'Orientación',
            header: 'Tamaño de papel',
            label: 'Tamaño de papel',
            orientationTypes: {
                landScape: 'Horizontal',
                portrait: 'Vertical'
            },
            types: {
                a3Size: 'A3',
                a4Size: 'A4',
                b4Size: 'B4(JIS)',
                b5Size: 'B5(JIS)',
                envelope: 'Sobre #10',
                envelopeMonarch: 'Sobre monarca',
                executive: 'Ejecutivo',
                legal: 'Legal',
                letter: 'Carta',
                tabloid: 'Tabloide',
                custom: 'Personalizado'
            }
        },
        styleTooltip: 'Estilo',
        colorTooltip: 'Color',
        sizeTooltip: 'Tamaño',
        reportLanguage: {
            categoryName: 'Idioma',
            labelText: 'Idioma'
        },
        backgroundImage: {
            categoryName: 'Imagen de fondo',
            source: 'Fuente',
            sourceTypes: {
                external: 'Externo',
                embedded: 'Insertado',
                database: 'Base de datos'
            },
            value: 'Valor',
            mimeTypeLabel: 'Tipo MIME',
            mimeTypes: {
                bmp: 'imagen/bmp',
                jpeg: 'imagen/jpeg',
                gif: 'imagen/gif',
                png: 'imagen/png',
                xPng: 'imagen/x-png'
            },
            repeatProperty: {
                categoryName: 'Repetir',
                repeat: 'Repetir',
                repeatX: 'RepetirX',
                repeatY: 'RepetirY',
                defaultType: 'Predeterminado',
                clip: 'Clip',
                fit: 'Ajustado'
            }
        },
        reportMiscellaneous: {
            categoryName: 'Misceláneo',
            customAttributes: 'Atributos personalizados',
            consumeWhiteSpace: 'Consumir espacio en blanco del contenedor',
            reportVersion: 'Versión',
            reportversions: {
                default: 'Predeterminado',
                RDL2010: 'RDL2010',
                RDL2016: 'RDL2016'
            }
        }
    },
    textBoxProperty: {
        contents: {
            categoryName: 'Contenido',
            content: 'Contenido'
        },
        basicSettings: {
            categoryName: 'Ajustes básicos',
            font: {
                categoryName: 'Fuente',
                defaultStyle: 'Predeterminado',
                normal: 'Normal',
                italic: 'Italic'
            },
            fontStyle: {
                categoryName: 'Estilo de fuente',
                defaultStyle: 'Predeterminado',
                normal: 'Normal',
                thin: 'Delgada',
                extraLight: 'Extraligera',
                light: 'Ligera',
                medium: 'Medio',
                semiBold: 'Seminegrita',
                bold: 'Negrita',
                extraBold: 'Extranegrita',
                heavy: 'Fuerte'
            },
            textDecoration: {
                categoryName: 'Decoración de texto',
                defaultStyle: 'Predeterminado',
                none: 'Ninguno',
                underline: 'Subrayado',
                lineThrough: 'Tachado',
                overline: 'Suprarrayado'
            },
            format: 'Formato',
            markupType: {
                categoryName: 'Tipo de marca',
                plaintext: 'Texto sin formato',
                html: 'HTML'
            }
        },
        alignment: {
            categoryName: 'Alineación',
            textAlignment: {
                categoryName: 'Alineación de texto',
                defaultStyle: 'Predeterminado',
                left: 'Izquierda',
                center: 'Centro',
                right: 'Derecha'
            },
            verticalAlignment: {
                categoryName: 'Alineación vertical',
                defaultStyle: 'Predeterminado',
                top: 'Superior',
                middle: 'Mitad',
                bottom: 'Inferior'
            },
            lineSpacing: 'Alto de línea'
        },
        appearance: {
            categoryName: 'Apariencia',
            borderTypes: {
                default: 'Borde',
                left: 'Izquierda',
                top: 'Superior',
                right: 'Derecha',
                bottom: 'Inferior'
            },
            borderStyles: {
                solid: 'Sólido',
                none: 'Ninguno',
                double: 'Doble',
                dashed: 'Guiones',
                dotted: 'Puntos'
            },
            borderProperties: {
                defaultColor: 'Color de borde',
                defaultSize: 'Tamaño de borde',
                defaultStyle: 'Estilo de borde',
                leftColor: 'Color de borde izquierdo',
                leftSize: 'Tamaño de borde izquierdo',
                leftStyle: 'Estilo de borde izquierdo',
                topColor: 'Color de borde superior',
                topSize: 'Tamaño de borde superior',
                topStyle: 'Estilo de borde superior',
                rightColor: 'Color de borde derecho',
                rightSize: 'Tamaño de borde derecho',
                rightStyle: 'Estilo de borde derecho',
                bottomColor: 'Color de borde inferior',
                bottomSize: 'Tamaño de borde inferior',
                bottomStyle: 'Estilo de borde inferior'
            },
            background: 'Color de fondo'
        },
        link: 'Vínculo',
        linkReport: 'Vincular informe',
        URL: 'URL',
        position: {
            categoryName: 'Posición',
            label: 'Posición',
            sizeLabel: 'Tamaño',
            left: 'Izquierda',
            top: 'Superior',
            width: 'Ancho',
            height: 'Alto'
        },
        visibility: {
            categoryName: 'Visibilidad',
            hidden: 'Oculto',
            toggleItem: 'Alternar elemento',
            intialToggleState: 'Estado de conmutación inicial'
        },
        miscellaneous: {
            categoryName: 'Misceláneo',
            canGrow: 'Puede crecer',
            canShrink: 'Puede reducirse',
            toolTip: 'Información sobre herramientas',
            documentMap: 'Mapa de documento',
            customAttributes: 'Atributos personalizados',
            bookmark: 'Marcador'
        },
        paragraphSettings: {
            categoryName: 'Ajustes de párrafos',
            textAlignment: {
                categoryName: 'Alineación de texto',
                defaultStyle: 'Predeterminado',
                left: 'Izquierda',
                center: 'Centro',
                right: 'Derecha'
            },
            indent: {
                categoryName: 'Sangría',
                leftIndent: 'Izquierda',
                rightIndent: 'Derecha'
            },
            space: {
                categoryName: 'Espacio',
                topSpace: 'Superior',
                bottomSpace: 'Inferior'
            },
            listLevel: {
                categoryName: 'Nivel de lista',
                zeroLevel: '',
                oneLevel: '',
                twoLevel: '',
                threeLevel: '',
                fourLevel: ''
            },
            listStyle: {
                categoryName: 'Estilo de lista',
                none: 'Ninguno',
                numbered: 'Enumerado',
                bulleted: 'Con viñetas'
            }
        },
        padding: {
            label: 'Relleno',
            left: 'Izquierda',
            top: 'Superior',
            right: 'Derecha',
            bottom: 'Inferior'
        },
        contextMenu: {
            cut: 'Cortar',
            copy: 'Copiar',
            paste: 'Pegar',
            expression: 'Expresión',
            pasteAlert: 'Tu navegador no admite el acceso directo al portapapeles. Por favor, utiliza el atajo de teclado Ctrl+V en lugar de la operación de pegado.'
        },
        fontStyle: 'Estilo de fuente',
        fontWeight: 'Peso de fuente',
        fontSize: 'Tamaño de fuente',
        fontColor: 'Color de fuente',
        fontFamily: 'Familia de fuente',
        fontStyleTooltip: 'Estilo',
        fontWeightTooltip: 'Peso',
        fontSizeTooltip: 'Tamaño',
        fontColorTooltip: 'Color',
        fontFamilyTooltip: 'Familia de fuente',
        styleTooltip: 'Estilo',
        colorTooltip: 'Color',
        sizeTooltip: 'Tamaño',
        selectedText: 'Texto seleccionado',
        interActiveSort: {
            categoryName: 'Clasificación de usuario',
            userSort: {
                labelText: 'Ordenar expresión',
                scopePropertyLabel: 'Ordenar alcance de expresión',
                targetPropertyLabel: 'Ordenar objetivos'
            }
        },
        localization: {
            categoryName: 'Localización',
            labelText: 'Idioma',
            direction: {
                directionLabel: 'Dirección',
                leftToRight: 'LTR',
                rightToLeft: 'RTL',
                default: 'Predeterminado'
            },
            writingMode: {
                labelText: 'Modo de escritura',
                types: {
                    default: 'Predeterminado',
                    horizontal: 'Horizontal',
                    vertical: 'Vertical',
                    rotate: 'Rotar 270'
                }
            }
        },
        dataElement: {
            categoryName: 'Elemento de datos',
            elementName: 'Nombre',
            elementOutput: {
                auto: 'Automático',
                noOutput: 'NoSalida',
                categoryName: 'Salida',
                output: 'Salida'
            },
            elementStyle: {
                auto: 'Automático',
                attribute: 'Atributo',
                element: 'Elemento',
                categoryName: 'Estilo'
            }
        }
    },
    designPanel: {
        headerText: 'Encabezado',
        footerText: 'Pie de página',
        pasteAlert: 'Solo se admiten elementos básicos en las zonas de encabezado y pie de página',
        pasteTitle: 'Pegar',
        headerAreaLabel: 'Encabezado del área de diseño',
        bodyAreaLabel: 'Cuerpo del área diseño',
        footerAreaLabel: 'Pie de página del área de diseño',
        rdlSwitcherAlert: {
            headerContent: 'Informe',
            bodyContent: 'El informe es un retroceso de la versión actual y algunas funciones no son compatibles con esta versión. ¿Quieres continuar?'
        }
    },
    designContextMenu: {
        cutItem: 'Cortar',
        copyItem: 'Copiar',
        pasteItem: 'Pegar',
        deleteItem: 'Eliminar',
        insertItem: 'Insertar',
        addHeader: 'Añadir encabezado',
        removeHeader: 'Eliminar encabezado',
        addFooter: 'Añadir pie de página',
        removeFooter: 'Eliminar pie de página',
        chartItem: 'Gráfico',
    },
    customProperty: {
        position: {
            categoryName: 'Posición',
            label: 'Posición',
            left: 'Izquierda',
            top: 'Superior',
            sizeLabel: 'Tamaño',
            width: 'Ancho',
            height: 'Alto'
        },
        appearance: {
            categoryName: 'Apariencia',
            borderTypes: {
                default: 'Borde',
                left: 'Izquierda',
                top: 'Superior',
                right: 'Derecha',
                bottom: 'Inferior'
            },
            borderStyles: {
                solid: 'Sólido',
                none: 'Ninguno',
                double: 'Doble',
                dashed: 'Guiones',
                dotted: 'Puntos'
            },
            borderProperties: {
                defaultColor: 'Color de borde',
                defaultSize: 'Tamaño de borde',
                defaultStyle: 'Estilo de borde',
                leftColor: 'Color de borde izquierdo',
                leftSize: 'Tamaño de borde izquierdo',
                leftStyle: 'Estilo de borde izquierdo',
                topColor: 'Color de borde superior',
                topSize: 'Tamaño de borde superior',
                topStyle: 'Estilo de borde superior',
                rightColor: 'Color de borde derecho',
                rightSize: 'Tamaño de borde derecho',
                rightStyle: 'Estilo de borde derecho',
                bottomColor: 'Color de borde inferior',
                bottomSize: 'Tamaño de borde inferior',
                bottomStyle: 'Estilo de borde inferior'
            },
            backGround: 'Color de fondo'
        },
        visibility: {
            categoryName: 'Visibilidad',
            hidden: 'Oculto'
        },
        miscellaneous: {
            categoryName: 'Misceláneo',
            toolTip: 'Información sobre herramientas',
            bookmark: 'Marcador'
        },
        styleTooltip: 'Estilo',
        colorTooltip: 'Color',
        sizeTooltip: 'Tamaño'
    },
    tablixProperty: {
        data: {
            categoryName: 'Datos',
            datasetName: 'Conjunto de datos',
            datasetNone: 'Ninguno'
        },
        noRows: {
            categoryName: 'Sin filas',
            font: {
                categoryName: 'Fuente',
                color: 'Color de fuente',
                family: 'Familia de fuente',
                size: 'Tamaño de fuente',
                style: 'Estilo de fuente',
                weight: 'Peso de fuente'
            },
            fontStyle: {
                label: 'Estilo de fuente',
                fontItem: {
                    default: 'Predeterminado',
                    normal: 'Normal',
                    italic: 'Italic'
                },
                fontWeight: {
                    default: 'Predeterminado',
                    normal: 'Normal',
                    thin: 'Delgada',
                    extraLight: 'Extraligera',
                    light: 'Ligera',
                    medium: 'Medio',
                    semiBold: 'Seminegrita',
                    bold: 'Negrita',
                    extraBold: 'Extranegrita',
                    heavy: 'Fuerte',
                }
            },
            textDecoration: {
                categoryName: 'Decoración de texto',
                defaultStyle: 'Predeterminado',
                none: 'Ninguno',
                underline: 'Subrayado',
                overline: 'Suprarrayado',
                lineThrough: 'Tachado'
            },
            format: 'Formato',
            lineHeight: 'Alto de línea',
            message: 'Mensaje',
            paddingTypes: {
                label: 'Relleno',
                left: 'Izquierda',
                right: 'Derecha',
                top: 'Superior',
                bottom: 'Inferior',
            },
            textAlign: {
                categoryName: 'Alineación de texto',
                default: 'Predeterminado',
                left: 'Izquierda',
                right: 'Derecha',
                center: 'Centro'
            },
            verticalAlign: {
                categoryName: 'Alineación vertical',
                default: 'Predeterminado',
                top: 'Superior',
                middle: 'Mitad',
                bottom: 'Inferior'
            },
            writingMode: {
                categoryName: 'Modo de escritura',
                default: 'Predeterminado',
                horizontal: 'Horizontal',
                vertical: 'Vertical',
                rotateProperty: 'Rotar 270'
            }
        },
        appearance: {
            categoryName: 'Apariencia',
            borderTypes: {
                default: 'Borde',
                left: 'Izquierda',
                top: 'Superior',
                right: 'Derecha',
                bottom: 'Inferior'
            },
            borderStyles: {
                solid: 'Sólido',
                none: 'Ninguno',
                double: 'Doble',
                dashed: 'Guiones',
                dotted: 'Puntos'
            },
            borderProperties: {
                defaultColor: 'Color de borde',
                defaultSize: 'Tamaño de borde',
                defaultStyle: 'Estilo de borde',
                leftColor: 'Color de borde izquierdo',
                leftSize: 'Tamaño de borde izquierdo',
                leftStyle: 'Estilo de borde izquierdo',
                topColor: 'Color de borde superior',
                topSize: 'Tamaño de borde superior',
                topStyle: 'Estilo de borde superior',
                rightColor: 'Color de borde derecho',
                rightSize: 'Tamaño de borde derecho',
                rightStyle: 'Estilo de borde derecho',
                bottomColor: 'Color de borde inferior',
                bottomSize: 'Tamaño de borde inferior',
                bottomStyle: 'Estilo de borde inferior'
            },
            backGround: 'Color de fondo'
        },
        miscellaneous: {
            categoryName: 'Misceláneo',
            noRowsMessage: 'Mensaje sin filas',
            pageName: 'Nombre de página',
            keepTogether: 'Mantener junto',
            customAttributes: 'Atributos personalizados',
            toolTip: 'Información sobre herramientas',
            documentMap: 'Mapa de documento',
            bookmark: 'Marcador'
        },
        dataLimit: {
            categoryName: 'Límite de datos de vista previa',
            maxColCount: 'Recuento máximo de columnas',
            maxRowCount: 'Recuento máximo de filas'
        },
        headers: {
            categoryName: 'Encabezados',
            fixedRow: 'Fila fija',
            fixedColumn: 'Columna fija',
            repeatRow: 'Repetir fila',
            repeatColumn: 'Repetir columna'
        },
        font: {
            categoryName: 'Fuente',
            defaultStyle: 'Predeterminado',
            normal: 'Normal',
            italic: 'Italic'
        },
        fontStyle: {
            categoryName: 'Estilo de fuente',
            defaultStyle: 'Predeterminado',
            normal: 'Normal',
            thin: 'Delgada',
            extraLight: 'Extraligera',
            light: 'Ligera',
            medium: 'Medio',
            semiBold: 'Seminegrita',
            bold: 'Negrita',
            extraBold: 'Extranegrita',
            heavy: 'Fuerte'
        },
        textDecoration: {
            categoryName: 'Decoración de texto',
            defaultStyle: 'Predeterminado',
            none: 'Ninguno',
            underline: 'Subrayado',
            lineThrough: 'Tachado',
            overline: 'Suprarrayado'
        },
        alignment: {
            categoryName: 'Alineación',
            textAlignment: {
                categoryName: 'Alineación de texto',
                defaultStyle: 'Predeterminado',
                left: 'Izquierda',
                center: 'Centro',
                right: 'Derecha'
            },
            verticalAlignment: {
                categoryName: 'Alineación vertical',
                defaultStyle: 'Predeterminado',
                top: 'Superior',
                middle: 'Mitad',
                bottom: 'Inferior'
            }
        },
        padding: {
            label: 'Relleno',
            left: 'Izquierda',
            top: 'Superior',
            right: 'Derecha',
            bottom: 'Inferior'
        },
        position: {
            categoryName: 'Posición',
            label: 'Posición',
            left: 'Izquierda',
            top: 'Superior',
            sizeLabel: 'Tamaño',
            width: 'Ancho',
            height: 'Alto'
        },
        visibility: {
            categoryName: 'Visibilidad',
            hidden: 'Oculto',
            toggleItem: 'Alternar elemento'
        },
        staticGroupProp: {
            categoryName: 'Ajustes básicos',
            filters: 'Filtros',
            sorts: 'Ordenamiento',
            fixedData: 'Datos fijos',
            groupExp: 'Grupos',
            hideIfNoRows: 'Ocultar si no hay filas',
            keepWithGroup: 'Mantener con grupo',
            repeatOnNewPage: 'Repetir en una nueva página',
            afterGroup: 'Después',
            beforeGroup: 'Antes',
            pageBreak: {
                categoryName: 'Salto de página',
                enablePageBreak: 'Habilitar salto de página',
                breakLocation: {
                    categoryName: 'Ubicación de salto de página',
                    none: 'Ninguno',
                    start: 'Inicio',
                    end: 'Fin',
                    startAndEnd: 'Inicio y fin',
                    between: 'Entre'
                },
                pageNumberReset: 'Reinicio de número de página',
            }
        },
        waterMark: {
            matrix: {
                rows: 'Filas',
                columns: 'Columnas',
                data: 'Datos'
            }
        },
        fontStyleTooltip: 'Estilo',
        fontWeightTooltip: 'Peso',
        fontSizeTooltip: 'Tamaño',
        fontColorTooltip: 'Color',
        fontFamilyTooltip: 'Familia de fuente',
        styleTooltip: 'Estilo',
        colorTooltip: 'Color',
        sizeTooltip: 'Tamaño',
        tablixMember: 'Miembro de tablix',
        dataElement: {
            categoryName: 'Elemento de datos',
            elementName: 'Nombre',
            elementOutput: {
                auto: 'Automático',
                noOutput: 'NoSalida',
                categoryName: 'Salida',
                output: 'Salida'
            }
        }
    },
    rowColumnGroup: {
        rowGroupLable: 'Grupos de filas',
        columnGroupLable: 'Grupos de columnas',
        tablixAlertHeader: 'Tablix',
        alertMessage: 'Habilitar la opción de expansión para seleccionar el elemento del informe tablix',
        contextMenu: {
            addgroup: 'Añadir grupo',
            advanced: 'Avanzado',
            deletegroup: 'Eliminar grupo',
            addtotal: 'Añadir total',
            groupProperties: 'Propiedades de grupo',
            addColumnGroup: 'Añadir grupo de columnas',
            addRowGroup: 'Añadir grupo de filas'
        },
        contextSubMenu: {
            adjacentafter: 'Adyacente después',
            adjacentbefore: 'Adyacente antes',
            childgroup: 'Grupo hijo',
            parentgroup: 'Grupo padre',
            totalafter: 'Después',
            totalbefore: 'Antes'
        },
        errorMessage: {
            createData: 'El informe no tiene conjunto de datos. Crear datos para añadir grupo en tablix.',
            assignData: 'Los datos no están asignados para tablix. Asignar datos en tablix para añadir grupo.',
            dataNotAvailable: 'Los datos asignados no existen en el informe. Crear nuevo o vincular los datos existentes a tablix.',
            detailGroup: 'No se puede insertar grupo dentro de grupo de detalle.'
        },
        tablixGroupingPanel: 'Panel de agrupamiento tablix',
        tablixRowColumnContainer: 'Contenedor de grupos de filas y columnas de tablix',
        tablixRowGroup: 'Contenedor de grupo de filas tablix',
        tablixColumnGroup: 'Contenedor de grupo de columnas tablix',
        tablixAddGroupMenu: 'Menú añadir grupo tablix',
        groupAdvanceMenu: 'Menú avanzado del panel de agrupación tablix'
    },
    tablixContextMenu: {
        rowMenu: {
            insertRow: 'Insertar fila',
            above: 'Arriba',
            below: 'Debajo'
        },
        columnMenu: {
            insertColumn: 'Insertar columna',
            left: 'Izquierda',
            right: 'Derecha'
        },
        rowGroupMenu: {
            insideGroupAbove: 'Grupo interior - Arriba',
            insideGroupBelow: 'Grupo interior - Debajo',
            outsideGroupAbove: 'Grupo externo - Arriba',
            outsideGroupBelow: 'Grupo externo - Debajo'
        },
        columnGroupMenu: {
            insideGroupLeft: 'Grupo interior - Izquierda',
            insideGroupRight: 'Grupo interior - Derecho',
            outsideGroupLeft: 'Grupo externo- Izquierda',
            outsideGroupRight: 'Grupo externo- Derecho',
        },
        deleteRows: 'Eliminar filas',
        deleteColumns: 'Eliminar columnas',
        rowVisibility: 'Visibilidad de fila',
        columnVisibility: 'Visibilidad de columna',
        tablixProperties: 'Propiedades tablix',
        splitcells: 'Dividir celdas',
        mergecells: 'Combinar celdas',
        groupMenu: {
            adjacentAbove: 'Adyacente arriba',
            adjacentleft: 'Adyacente izquierda',
            adjacentright: 'Adyacente derecha',
            adjacentBelow: 'Adyacente debajo',
            childGroup: 'Grupo resultado',
            parentGroup: 'Grupo padre',
            deleteRowGroup: 'Eliminar grupo de filas',
            deleteColGroup: 'Eliminar grupo de columnas',
            addRowGroup: 'Grupo de filas',
            addColGroup: 'Grupo de columnas'
        },
        reportItemMenu: {
            insertItem: 'Insertar',
            chart: 'Gráfico'
        },
        totalMenu: {
            total: 'Añadir total',
            row: 'Fila',
            column: 'Columna',
            before: 'Antes',
            after: 'Después'
        },
        cellMenu: {
            addExpression: 'Añadir expresión',
            editExpression: 'Editar expresión',
            datasource: 'Añadir fuente de datos',
            noFields: 'No hay campos',
            addText: 'Añadir texto',
            editText: 'Editar texto'
        },
        basicItems: {
            deleteItem: 'Eliminar',
            cut: 'Cortar',
            copy: 'Copiar',
            paste: 'Pegar'
        }
    },
    tablixAlertDialog: {
        ok: 'OK',
        cancel: 'Cancelar',
        closeToolTip: 'Cerrar',
        deleteRowTitle: 'Eliminar filas',
        deleteRow: 'Solo eliminar filas',
        deleteRowGroup: 'Eliminar filas y grupos asociados',
        deleteRowContent: 'Eliminar opciones de filas',
        deleteBodyRow: 'El cuerpo de tablix debe contener al menos una fila.',
        deleteColumnTitle: 'Eliminar columnas',
        deleteColumn: 'Solo eliminar columnas',
        deleteColumnGroup: 'Eliminar columnas y grupos asociados',
        deleteColumnContent: 'Eliminar opciones de columnas',
        deleteBodyColumn: 'El cuerpo de tablix debe contener al menos una columna.',
        deleteGroup: 'Solo eliminar grupo',
        deleteGroupRowColumn: 'Eliminar grupo y filas y columnas relacionadas',
        deleteGroupTitle: 'Eliminar grupo',
        deleteGroupContent: 'Eliminar opciones de grupo',
        deleteStructure: 'Estructura de grupo no disponible.',
        removeRowAlert: 'Fallo al eliminar fila en elemento de informe tablix',
        removeRow: 'Eliminar filas',
        removeColumn: 'Eliminar columnas',
        addRow: 'Añadir fila',
        addColumn: 'Añadir columna',
        removeColumnAlert: 'Error al eliminar columna en elemento de informe tablix',
        addRowAlert: 'Error al añadir fila en elemento de informe tablix',
        addColumnAlert: 'Error al añadir columna en elemento de informe tablix'
    },
    cellMergingAlertInfo: {
        merge: 'Combinar celdas',
        mergeAlert: 'Error al combinar celdas en elemento de informe tablix',
        split: 'Dividir celdas',
        splitAlert: 'Error al dividir celdas en elemento de informe tablix'
    },
    tablixAlertInfo: {
        addGroup: 'Añadir grupo',
        removeGroup: 'Eliminar grupo',
        adjacentAfterAlert: 'Error al añadir grupo adyacente en estructura jerárquica',
        adjacentBeforeAlert: 'Error al añadir grupo adyacente en estructura jerárquica',
        childGroupALert: 'Error al añadir grupo hijo en estructura jerárquica',
        title: 'Elemento de informe tablix',
        parentGroupAlert: 'Error al añadir el grupo padre en la estructura jerárquica',
        removeGroupAlert: 'Error al eliminar grupo en estructura jerárquica',
        selectedMemberAlert: 'El miembro seleccionado no es miembro del grupo',
        pasteActionAlert: 'La información no se puede contabilizar porque el área de copia y el área de pegado no tienen el mismo tamaño y forma.',
        pasteTitle: 'Pegar'
    },
    tablixGroup: {
        title: 'Grupo tablix',
        headerTxt: 'Etiqueta de grupo',
        groupBy: 'Agrupar por:',
        chooseField: 'Escoger campo',
        showDetailData: 'Mostrar datos detallados',
        addGroupHeader: 'Añadir encabezado',
        addGroupFooter: 'Añadir pie de página',
        ok: 'OK',
        cancel: 'Cancelar',
        closeToolTip: 'Cerrar'
    },
    tablixDataAssignMenu: {
        datasource: 'Añadir fuente de datos',
        addExpression: 'Añadir expresión',
        editExpression: 'Editar expresión',
        addText: 'Añadir texto',
        editText: 'Editar texto',
        search: 'Buscar',
        noFieldsFound: 'No se encontraron campos'
    },
    tablixTotalAlert: {
        headerLabel: 'Añadir total de encabezados',
        staticLabel: 'Añadir total',
        headerMessage: 'Error al añadir fila o columna total al encabezado de grupo en elemento de informe tablix',
        staticMessage: 'Error al añadir fila o columna total al cuerpo del tablix en elemento de informe tablix'
    },
    tablixAddTextDialog: {
        save: 'Guardar',
        add: 'AÑADIR',
        cancel: 'Cancelar',
        closeToolTip: 'Cerrar',
        addText: 'Añadir texto',
        editText: 'Editar texto'
    },
    reportParameter: {
        title: 'Parámetros',
        validationMessage: 'Especificar parámetro de consulta válido',
        descriptionText: 'Parámetros de informe',
        addText: 'AÑADIR',
        ok: 'OK',
        cancel: 'Cancelar',
        nameWaterMark: 'Nombre de parámetro',
        valueWaterMark: 'Valor',
        closeToolTip: 'Cerrar',
        deleteField: 'Borrar campo',
        allowMultiple: 'Permitir múltiples valores',
        allowNull: 'Permite valor nulo'
    },
    queryDesigner: {
        storeParameter: {
            title: 'Parámetros',
            ok: 'OK',
            cancel: 'Cancelar',
            parameterLable: 'Parámetro',
            nullLable: 'Nulo',
            valueLable: 'Valor',
            dataTypeLable: 'Tipo de dato',
            closeToolTip: 'Cerrar'
        },
        parameter: {
            title: 'Parámetros',
            ok: 'OK',
            cancel: 'Cancelar',
            parameterLable: 'Parámetro',
            nullLable: 'Nulo',
            valueLable: 'Valor',
            dataTypeLable: 'Tipo de dato',
            auto: 'Automático',
            text: 'Texto',
            closeToolTip: 'Cerrar'
        },
        filter: {
            title: 'Filtros de consulta',
            descriptionLable: 'Lista de filtros de tabla',
            add: 'AÑADIR',
            save: 'OK',
            cancel: 'Cancelar',
            nullLable: 'Nulo',
            trueLable: 'Verdadero',
            falseLable: 'Falso',
            parameterTooltip: 'Incluir como parámetro',
            closeToolTip: 'Cerrar',
            numberType: 'Número',
            stringType: 'Cadena',
            intOperatorType: {
                equals: 'Iguales',
                doesNotEqual: 'Desigual',
                greaterThan: 'Mayor que',
                greaterThanOrEqual: 'Mayor que o igual que',
                lessThan: 'Menor que',
                lessThanOrEqual: 'Menor que o igual que',
                between: 'Entre',
                notBetween: 'No Entre'
            },
            stringOpertorType: {
                equals: 'Iguales',
                startsWith: 'Comienza con',
                endWith: 'Termina con',
                contains: 'Contiene',
                notContains: 'No contiene'
            },
            errorMessage: {
                dateValidation: 'El valor es un formato de fecha no válido.',
                commonContent: 'El filtro ',
                booleanValidation: ' no tiene valores para filtrar. Por favor, proporciona los valores para el filtro.',
                stringValidation: ' no tiene los valores adecuados para filtrar. '
            },
            queryCondition: {
                and: 'Y',
                or: 'O'
            }
        },
        previewArea: {
            dataPreview: 'Vista preliminar de datos',
            noRecords: 'No hay registros para mostrar',
            generatePreview: 'Generar vista preliminar',
            executeRecords: 'Ejecutar para previsualizar registros',
            record: 'Registro',
            records: 'Registros',
            retrieved: 'Recuperado',
            loadRecord: 'Cargar más',
            update: 'Actualizar',
            previewContainer: 'Contenedor de vista preliminar de datos'
        },
        schemaArea: {
            search: 'Buscar',
            matchesFound: 'No se han encontrado coincidencias',
            rename: 'Renombrar',
            searchInfo: 'Recupera la información coincidente del esquema actual',
            aggregation: 'Sumar',
            dialogHeader: 'Conjunto de datos',
            alertMessage: {
                datasourceAlert: 'Seleccionar una fuente de datos para configurar el conjunto de datos del informe',
                removeTable: 'Las tablas asociadas a continuación se eliminarán con esto',
                duplicateName: 'El nombre de columna especificado ya existe',
                duplicateDatasetName: 'El nombre especificado ya existe en la lista de conjunto de datos',
                datasetSpecialCharacter: 'El nombre no debe contener espacios ni caracteres especiales',
                specialCharacter: 'El nombre de la columna no debe contener caracteres especiales.',
                switcherAlert: 'Al cambiar al diseñador visual se descartarán los cambios manuales realizados en la consulta. ¿Quieres utilizar el diseñador visual de todos modos?'
            },
            errorMessage: {
                specifyName: 'Especificar nombre de columna',
                specifyDatasetName: 'Especificar nombre del conjunto de datos',
                previewFailed: 'Error al previsualizar la tabla seleccionada',
                specifyQuery: 'Especificar la consulta del conjunto de datos',
                selectTable: 'Seleccionar tabla para guardar el conjunto de datos',
                queryFailed: 'Error en el conjunto de datos al guardar la consulta de la tabla seleccionada',
                refreshFailed: 'No se ha podido actualizar el conjunto de datos {datasetName}, requiere uno o más valores de entrada. Por favor, edita y guarda el conjunto de datos.',
                tableProcedure: 'Error en el conjunto de datos al recuperar el procedimiento de tabla seleccionado',
                deleteTableFailure: 'Error al eliminar la tabla seleccionada',
                joinTableFailure: 'Error al unir las tablas seleccionadas',
                confirmPermission: 'Registros enormes recuperados, la renderización llevará algo de tiempo. ¿Quieres cargar de todos modos?'
            },
            dragSurface: 'Arrastrar contenedor de superficie',
            searchSchema: 'Buscar esquema',
            fieldTable: 'Tabla de campo',
            closeFieldTable: 'Cerrar tabla',
            fieldSelection: 'Selector de campo',
            selectAndDeselectAll: 'Seleccionar y deseleccionar todas las columnas'
        },
        toolBar: {
            datasourceLable: 'Fuente de datos',
            datasetName: 'Nombre',
            run: 'Ejecutar',
            join: 'Unir',
            expression: 'Expresión',
            filter: 'Filtro',
            code: 'Código',
            finish: 'Terminar',
            cancel: 'Cancelar',
            parameter: 'Parámetro',
            datasourceWaterMark: 'Seleccionar una fuente de datos',
            autoPreview: 'Vista preliminar automática'
        },
        joiner: {
            title: 'Unificador de consultas',
            descriptionLable: 'Lista de tabla de relaciones',
            add: 'AÑADIR',
            save: 'OK',
            cancel: 'Cancelar',
            closeToolTip: 'Cerrar',
            addField: 'Añadir campo',
            leftTableWaterMark: 'Tabla izquierda',
            rightTableWaterMark: 'Tabla derecha',
            leftFieldWaterMark: 'Campo izquierdo',
            rightFieldWaterMark: 'Campo derecho',
            operatorWaterMark: 'Operador',
            joinTypeWaterMark: 'Unir tipo',
            joinTypes: {
                inner: 'Interior',
                outer: 'Exterior izquierdo',
                rightOuter: 'Exterior derecho',
                fullOuter: 'Exterior completo'
            },
            errorMessage: {
                removeField: 'Cada relación debe tener una condición de campo. Por lo tanto, no permite eliminar este campo.',
                noRelationAlert: ' no tiene relación con otras tablas',
                selectLeftTable: 'Seleccionar el valor izquierdo de la tabla',
                selectRightTable: 'Seleccionar el valor derecho de la tabla',
                selectRelation: 'Seleccionar la relación para las tablas',
                selectLeftColumn: 'Seleccionar el valor de la columna izquierda del campo fila #',
                selectRightColumn: 'Seleccionar el valor de la columna derecha del campo fila #',
                selectOperator: 'Seleccionar el operador del campo fila #',
                relationExists: 'Ya existe relación entre tablas',
                saveJoinerAlert: 'Error al unir las tablas seleccionadas'
            }
        },
        credentialDialog: {
            title: 'Diálogo de credenciales',
            userName: 'Nombre de usuario',
            password: 'Contraseña',
            userNameErrorMessage: 'Por favor, introduce el nombre de usuario',
            passwordErrorMessage: 'Por favor, introduce la contraseña',
            connect: 'Conectar',
            close: 'Cerrar',
            credentialLabel: 'Credenciales de la fuente de datos'
        },
        queryExpression: {
            title: 'Expresiones de consulta',
            functionLabel: 'Funciones',
            columnLabel: 'Ajustes de columna',
            expressionLabel: 'Expresión',
            nameLabel: 'Nombre',
            descriptionLabel: 'Descripción ',
            exampleLabelText: 'Ejemplo',
            ok: 'Guardar',
            cancel: 'Cancelar',
            add: 'AÑADIR',
            textAreaWaterMark: 'Expresión de consulta',
            nameFieldWaterMark: 'Nombre de expresión',
            closeToolTip: 'Cerrar',
            errorMessage: {
                saveAlert: 'La expresión no está guardada. ¿Quieres guardar y continuar?',
                bracketSyntax: 'Sintaxis incorrecta cerca de corchete(s) de apertura/cierre',
                parseAlert: 'El diseñador de informes no ha podido analizar la expresión especificada.',
                nameAlert: 'El campo nombre no debe estar vacío.',
                emptyAlert: 'El campo expresión no debe estar vacío.',
                duplicateName: 'El nombre de expresión especificado ya existe',
                specialCharacter: 'El nombre de la expresión no debe contener caracteres especiales.',
                referenceError: '¡La columna no puede ser referida dentro de su propia expresión!',
                invalidSyntax: 'Sintaxis no válida cerca de corchete(s) de apertura/cierre',
                retrieveExpression: 'El diseñador de informes no pudo recuperar la expresión especificada.',
            },
            datasetTitle: 'Conjunto de datos',
            expressions: {
                all: 'Todo',
                numbers: 'Números',
                logical: 'Lógico',
                conditional: 'Condicional',
                date: 'Fecha',
                stringType: 'Cadena',
                text: 'Texto',
                miscellenuous: 'Misceláneo ',
                abs: 'Devuelve el valor absoluto de la expresión dada.',
                acos: 'Devuelve el coseno inverso (también conocido como arcocoseno) de la expresión numérica dada.',
                asin: 'Devuelve el seno inverso (también conocido como arcoseno) de la expresión numérica dada.',
                atan: 'Devuelve la tangente inversa (también conocida como arctangente) de la expresión numérica dada.',
                cos: 'Devuelve el coseno del ángulo especificado en radianes de la expresión dada.',
                degree: 'Devuelve el ángulo en grados para el que se especificó en radianes de la expresión numérica dada.',
                exponent: 'Devuelve el valor exponencial de la expresión dada.',
                logrithm: 'Devuelve el logaritmo de la expresión dada en la base especificada.',
                pi: 'Devuelve el valor constante de PI.',
                power: 'Devuelve el valor de la expresión dada (expresión1) a la potencia especificada (expresión2).',
                radians: 'Devuelve el ángulo en radianes para el que se especificó en grados en la expresión numérica dada.',
                round: 'Devuelve un valor redondeado.',
                sign: 'Devuelve un valor que representa el signo positivo (+1), cero (0) o negativo (-1) de la expresión numérica dada.',
                sin: 'Devuelve el seno del ángulo especificado en radianes de la expresión dada.',
                squareRoot: 'Devuelve la raíz cuadrada de la expresión numérica dada.',
                tan: 'Devuelve la tangente de la expresión numérica dada.',
                ifCondition: 'Devuelve la parte verdadera o la parte falsa, dependiendo de la evaluación de la expresión.',
                ifNull: 'Si la expresión es numérica/cadena/fecha, devuelve la primera expresión. Si la primera expresión es un valor NULO, devuelve la segunda expresión.',
                isNotNull: 'Si la expresión numérica / cadena / fecha es un valor NULO, devuelve una cadena que representa falso; en caso contrario, representa verdadero.',
                isNull: 'Si la expresión numérica/cadena/fecha es un valor NULO, devuelve una cadena que representa verdadero; en caso contrario, representa falso.',
                and: 'Devuelve verdadero si ambas expresiones se evalúan como verdadero.',
                notOperation: 'Devuelve el valor lógico inverso de la expresión evaluada.',
                orOperation: 'Devuelve verdadero si alguna de las expresiones se evalúa como verdadera.',
                addDate: 'Añade el número de días a la fecha especificada.',
                name: 'Devuelve una cadena que representa la parte de fecha especificada de la expresión de fecha dada.',
                part: 'Devuelve un valor entero que representa la parte de fecha especificada de la expresión de fecha dada.',
                sub: 'Devuelve la fecha sustraída de la fecha especificada.',
                day: 'Devuelve un valor numérico que representa la parte del día de la fecha especificada.',
                dateDiff: 'Devuelve un valor numérico que representa la diferencia entre dos fechas especificadas.',
                hour: 'Devuelve la hora de la fecha dada como un entero.',
                minute: 'Devuelve un valor numérico que representa la parte del minuto de la fecha resultante de la expresión de fecha especificada.',
                month: 'Devuelve un valor numérico que representa la parte del mes de la fecha resultante de la expresión de fecha especificada.',
                now: 'Devuelve la fecha y hora actuales.',
                today: 'Devuelve la fecha actual.',
                year: 'Devuelve un valor numérico que representa la parte del año de la fecha resultante de la expresión de fecha especificada.',
                char: 'Convierte el código ASCII entero dado en un carácter.',
                concat: 'Devuelve un valor de cadena resultante de la concatenación de dos o más valores de cadena.',
                contains: 'Devuelve verdadero si la expresión de cadena dada contiene la expresión de subcadena especificada.',
                endsWith: 'Devuelve verdadero si la expresión de cadena dada termina con la expresión de subcadena especificada.',
                left: 'Devuelve el número especificado de caracteres a partir del inicio de la expresión de la cadena dada.',
                length: 'Devuelve el logaritmo natural de la expresión dada.',
                lower: 'Devuelve un valor de cadena convertido a minúsculas a partir de la expresión de cadena dada.',
                leftTrim: 'Devuelve el valor de la cadena con los espacios en blanco iniciales eliminados de la expresión de cadena.',
                maximum: 'Devuelve el valor máximo de la expresión dada.',
                minimum: 'Devuelve el valor mínimo de la expresión dada.',
                right: 'Devuelve el número especificado de caracteres desde el final de la expresión de cadena dada.',
                rightTrim: 'Devuelve la cadena sin espacios finales a la derecha en la cadena dada.',
                startswith: 'Devuelve verdadero si las expresiones de cadena dadas comienzan con la expresión de subcadena especificada.',
                subString: 'Devuelve una longitud específica de cadena a partir de un índice específico de la expresión de cadena dada.',
                upper: 'Devuelve un valor de cadena convertido a mayúsculas a partir de una expresión de cadena dada.'
            }
        }
    },
    chartItem: {
        categoryItems: {
            yvalue: 'Valor(es) Y',
            size: 'Tamaño(s)',
            xvalue: 'Valor(es) X',
            column: 'Columna',
            row: 'Fila(s)',
            high: 'Alto(s)',
            low: 'Bajo(s)'
        },
        categoryItemsMenu: {
            filter: 'Filtros',
            sort: 'Ordenamiento',
            group: 'Grupos',
            expression: 'Expresión',
            aggregate: 'Sumar',
            none: 'Ninguno'
        },
        validationMessage: 'El tipo de gráfico no es compatible con el diseñador.'
    },
    codeDialog: {
        title: 'Módulo del código',
        ok: 'OK',
        cancel: 'Cancelar',
        add: 'AÑADIR',
        closeToolTip: 'Cerrar',
        reference: {
            title: 'Referencias',
            waterMark: 'Referencia',
            errorMessage: 'El campo está vacío',
            headerText: 'Lista de referencias de ensamblaje',
            referenceTooltip: 'Añadir una referencia de ensamblado para utilizar tus funciones de ensamblado en el informe.',
            referenceSuffixToolTip: ' sobre referencias de ensamblaje RDL.'
        },
        classes: {
            title: 'Clases',
            nameFieldWaterMark: 'Nombre de clase',
            instanceFieldWaterMark: 'Nombre de instancia',
            emptyFieldValidation: 'Los campos están vacíos',
            emptyInstanceValueValidation: 'El campo está vacío',
            headerText: 'Lista de instancias de clase',
            toolTip: 'Añadir instancias de clase para acceder a tus funciones de objeto en el informe.',
            toolTipSuffix: ' sobre las clases RDL.'
        },
        code: {
            title: 'Código',
            headerText: 'Función de código VB para informe',
            tooltip: 'El motor de informes de {customBrandName} admite funciones de código VB para integrarse con el elemento y los datos del informe.',
            toolTipSuffix: ' sobre el módulo de código RDL.'
        },
        customCode: 'Editor de código personalizado',
        deleteReference: 'Eliminar campo de referencia',
        deleteClass: 'Eliminar campo de clase',
        refer: ' Consultar el ',
        article: 'Artículo MSDN'
    },
    customAttributeDialog: {
        title: 'Atributos personalizados',
        propertyName: 'Nombre',
        propertyValue: 'Valor',
        ok: 'OK',
        cancel: 'Cancelar',
        add: 'AÑADIR',
        nameField: 'El campo de nombre está vacío',
        sameNameAlert: 'El nombre especificado ya existe en la lista',
        closeToolTip: 'Cerrar',
        headerText: 'Cambiar propiedades personalizadas',
        deleteField: 'Borrar campo'
    },
    previewData: {
        title: 'Previsualizar datos',
        ok: 'OK',
        cancel: 'Cancelar',
        description: 'Vincular datos JSON para vista preliminar',
        close: 'Cerrar',
        infoToolTip: 'El informe requiere datos en formato JSON para previsualizar y contiene la clave y el valor en la lista de formato array.',
        jsonHeader: 'Datos JSON:',
        errorMessage: 'Especificar el formato JSON válido',
        previewDataAlert: {
            title: 'Previsualizar datos',
            alertMessage: '¿Quieres cambiar al diseñador de informes?'
        }
    },
    sampleDataSource: {
        sampleDSHeader: 'IMPORTAR DATOS DE MUESTRA',
        addText: 'AÑADIR',
        searchText: 'Buscar',
        noDataFound: 'No se encontraron datos',
        welcomeContentPrefix: 'Empieza por crear una fuente de datos',
        welcomeContentSuffix: 'Puedes conectarte a tus propios datos personalizados o puedes importar uno de los datos compartidos predefinidos que ofrecemos.',
        sampleDSText: 'IMPORTAR DATOS DE MUESTRA',
        exploreSampleText: 'Explorar datos de muestra',
        accordionText: 'Poner en marcha tu primer informe y explorar las opciones de personalización utilizando los datos de muestra.',
        errorMessage: 'Error de red',
        alertHeaderText: 'Importar datos',
        alertMessage: 'El diseñador de informes no pudo importar los datos de ReportServer.',
        refreshButton: 'Actualizar fuente de datos',
        exploreContainer: 'Contenedor del explorador de fuentes de datos',
        showHide: 'Mostrar ocultar'
    },
    field: {
        title: 'Campos',
        nameWaterMark: 'Nombre de campo',
        sourceWaterMark: 'Fuente de campo',
        ok: 'OK',
        cancel: 'Cancelar',
        description: 'Cambiar consulta y campos calculados',
        query: 'Campo consulta',
        calculated: 'Campo calculado',
        fieldError: 'El campo está vacío',
        fieldsError: 'Los campos están vacíos',
        add: 'AÑADIR',
        closeToolTip: 'Cerrar',
        invalidFormat: 'El nombre de campo no debe contener espacios ni caracteres especiales',
        sameFieldName: 'El nombre de campo ya existe',
        deleteField: 'Borrar campo'
    },
    parameterLayout: {
        title: 'Diseño de parámetros',
        ok: 'OK',
        cancel: 'Cancelar',
        closeToolTip: 'Cerrar',
        deleteConfirmation: {
            title: 'Parámetro',
            deleteCell: 'Eliminar parámetro de informe',
            deleteCells: 'Eliminar parámetros de informe'
        }
    },
    parameterContextMenu: {
        rowMenu: {
            insertRow: 'Insertar fila',
            above: 'Arriba',
            below: 'Debajo'
        },
        columnMenu: {
            insertColumn: 'Insertar columna',
            left: 'izquierda',
            right: 'Derecha'
        },
        deleteCell: 'Eliminar',
        deleteColumn: 'Eliminar columna',
        deleteRow: 'Eliminar fila'
    },
    commonProperty: {
        commonProperties: 'Propiedades comunes',
        basicSettings: {
            categoryName: 'Ajustes básicos',
            borderTypes: {
                default: 'Borde',
                left: 'Izquierda',
                top: 'Superior',
                right: 'Derecha',
                bottom: 'Inferior'
            },
            borderStyles: {
                solid: 'Sólido',
                none: 'Ninguno',
                double: 'Doble',
                dashed: 'Guiones',
                dotted: 'Puntos'
            },
            borderProperties: {
                defaultColor: 'Color de borde',
                defaultSize: 'Tamaño de borde',
                defaultStyle: 'Estilo de borde',
                leftColor: 'Color de borde izquierdo',
                leftSize: 'Tamaño de borde izquierdo',
                leftStyle: 'Estilo de borde izquierdo',
                topColor: 'Color de borde superior',
                topSize: 'Tamaño de borde superior',
                topStyle: 'Estilo de borde superior',
                rightColor: 'Color de borde derecho',
                rightSize: 'Tamaño de borde derecho',
                rightStyle: 'Estilo de borde derecho',
                bottomColor: 'Color de borde inferior',
                bottomSize: 'Tamaño de borde inferior',
                bottomStyle: 'Estilo de borde inferior'
            },
            backGround: 'Color de fondo',
            styleTooltip: 'Estilo',
            colorTooltip: 'Color',
            sizeTooltip: 'Tamaño'
        },
        fontSettings: {
            categoryName: 'Ajustes de fuente',
            fontLabel: 'Fuente',
            fontStyleLabel: 'Estilo de fuente',
            fontFamily: 'Familia de fuente',
            fontColor: 'Color de fuente',
            fontSize: 'Tamaño de fuente',
            fontStyle: 'Estilo de fuente',
            fontWeight: 'Peso de fuente',
            fontStyles: {
                normal: 'Normal',
                default: 'Predeterminado',
                italic: 'Italic'
            },
            fontWeights: {
                normal: 'Normal',
                default: 'Predeterminado',
                bold: 'Negrita',
                light: 'Ligera'
            }
        },
        position: {
            categoryName: 'Posición',
            label: 'Posición',
            left: 'Izquierda',
            top: 'Superior'
        },
        visibility: {
            categoryName: 'Visibilidad',
            hidden: 'Oculto'
        }
    },
    mapProperty: {
        fontFamilyTooltip: 'Familia de fuente',
        fontWeightTooltip: 'Peso',
        commonProperties: {
            font: 'Fuente',
            fontStyle: 'Estilo de fuente',
            fontWeight: 'Peso de fuente',
            fontSize: 'Tamaño de fuente',
            fontColor: 'Color de fuente',
            fontFamily: 'Familia de fuente',
            fontStyles: {
                normal: 'Normal',
                default: 'Predeterminado',
                italic: 'Italic',
            },
            fontWeights: {
                normal: 'Normal',
                default: 'Predeterminado',
                bold: 'Negrita',
                light: 'Ligera',
            },
            textAlignments: {
                center: 'Centro',
                right: 'Derecha',
                left: 'Izquierda'
            },
            mapColorRule: {
                categoryName: 'Regla de color de forma',
                colorRuleEnable: 'Habilitar regla de color',
                dataValue: 'Valor de dato',
                colorType: 'Tipo',
                colorRuleType: {
                    colorRange: 'Rango de color',
                    colorPalette: 'Paleta de color',
                    custom: 'Personalizado'
                },
                distribution: 'Tipo de distribución',
                distributionTypes: {
                    optimal: 'Óptimo',
                    equalDistribution: 'Distribución equitativa',
                    equalInterval: 'Intervalo equitativo',
                    custom: 'Personalizado'
                },
                startValue: 'Valor de inicio',
                endValue: 'Valor de fin',
                bucketCount: 'Recuento de cubos',
                buckets: 'Cubos',
                palette: 'Paleta',
                paletteTypes: {
                    random: 'Aleatorio',
                    light: 'Ligero',
                    semiTransparent: 'SemiTransparente',
                    brightPastel: 'Pastel brillante',
                    pacific: 'Pacífico'
                },
                customColors: 'Colores personalizados',
                startColor: 'Color inicial',
                middleColor: 'Color intermedio',
                endColor: 'Color final',
                legendName: 'Nombre de leyenda',
                legendText: 'Texto de leyenda',
                showInColorScale: 'Mostrar escala de color'
            },
            position: {
                topLeft: 'Superior izquierda',
                topCenter: 'Superior central',
                topRight: 'Superior derecha',
                rightTop: 'Derecha superior',
                rightCenter: 'Derecha central',
                rightBottom: 'Derecha inferior',
                bottomLeft: 'Inferior izquierda',
                bottomCenter: 'Inferior central',
                bottomRight: 'Inferior derecha',
                leftTop: 'Izquierda superior',
                leftCenter: 'Izquierda central',
                leftBottom: 'Izquierda inferior'
            }
        },
        mapTitle: {
            categoryName: 'Título',
            position: 'Posición',
            text: 'Texto',
            enableTitle: 'Habilitar título'
        },
        basicSettings: {
            categoryName: 'Ajustes básicos',
            polygonLayerName: 'Nombre de capa de polígono',
            shapeType: 'Formas',
            datasetName: 'Conjunto de datos',
            bindData: 'Datos vinculantes',
            mapProjection: {
                projectionType: 'Tipo de proyección',
                mapProjectionTypes: {
                    equirectangular: 'Equirrectangular',
                    mercator: 'Proyección de mercator',
                    eckert1: 'Eckert1',
                    eckert3: 'Eckert3',
                    hammerAitoff: 'HammerAitoff',
                    fahey: 'Fahey',
                    bonne: 'Bonne'
                }
            },
            filters: 'Filtros',
            groupExp: 'Grupos'
        },
        appearance: {
            categoryName: 'Apariencia',
            borderTypes: {
                default: 'Borde',
                left: 'Izquierda',
                top: 'Superior',
                right: 'Derecha',
                bottom: 'Inferior'
            },
            borderStyles: {
                solid: 'Sólido',
                none: 'Ninguno',
                double: 'Doble',
                dashed: 'Guiones',
                dotted: 'Puntos'
            },
            backGround: 'Color de fondo'
        },
        legendSettings: {
            categoryLegend: 'Leyenda',
            showLegend: 'Habilitar leyenda',
            showBorder: 'Mostrar borde',
            border: 'Borde',
            backgroundColor: 'Color de fondo',
            legendPosition: 'Posición',
            mapLegendMode: {
                legendMode: 'Modo leyenda',
                mapLegendTypes: {
                    default: 'Predeterminado',
                    interactive: 'Interactivo'
                }
            },
            legendFont: 'Fuente',
            legendFontStyle: 'Estilo de fuente',
            legendTitle: 'Título',
            titleFont: 'Fuente de título',
            titleFontStyle: 'Estilo de fuente de título',
        },
        pageBreak: {
            categoryName: 'Salto de página',
            enablePageBreak: 'Habilitar salto de página',
            breakLocation: 'Ubicación de salto de página',
            breakLocationTypes: {
                none: 'Ninguno',
                start: 'Inicio',
                end: 'Fin',
                startAndEnd: 'InicioYFin',
                between: 'Entre'
            },
            pageNumberReset: 'Reinicio de número de página',
            pageName: 'Nombre de página'
        },
        polygonTemplate: {
            categoryName: 'Ajustes de forma',
            showLabel: 'Mostrar etiqueta',
            backgroundColor: 'Color de fondo',
            border: 'Borde',
            font: 'Fuente',
            fontStyle: {
                categoryName: 'Estilo de fuente',
                defaultStyle: 'Predeterminado',
                normal: 'Normal',
                italic: 'Italic'
            },
            fontWeight: {
                default: 'Predeterminado',
                normal: 'Normal',
                thin: 'Delgada',
                extraLight: 'Extraligera',
                light: 'Ligera',
                medium: 'Medio',
                semiBold: 'Seminegrita',
                bold: 'Negrita',
                extraBold: 'Extranegrita',
                heavy: 'Fuerte',
            },
            label: 'Label Text',
            tooltip: 'Información sobre herramientas',
            visibility: 'Visibilidad'
        },
        position: {
            categoryName: 'Posición',
            label: 'Posición',
            top: 'Superior',
            left: 'Izquierda',
            sizeLabel: 'Tamaño',
            height: 'Alto',
            width: 'Ancho'
        },
        visibility: {
            categoryName: 'Visibilidad',
            hidden: 'Oculto',
            toggleItem: 'Alternar elemento'
        },
        styleTooltip: 'Estilo',
        colorTooltip: 'Color',
        sizeTooltip: 'Tamaño',
        fontcolortooltip: 'Color',
        fontsizetooltip: 'Tamaño',
        fontstyletooltip: 'Estilo de fuente',
        miscellaneous: {
            categoryMiscellaneous: 'Misceláneo',
            toolTip: 'Información sobre herramientas',
            documentMap: 'Mapa de documento',
            customAttributes: 'Atributos personalizados',
            bookmark: 'Marcador'
        },
        dataLimit: {
            categoryName: 'Límite de datos de vista previa',
            maxDataCount: 'Recuento máximo de datos'
        },
        spatial: {
            categoryName: 'Espacial',
            fielddefinitions: 'Definiciones de campos',
            polygons: 'Polígonos'
        },
        mapErrorMessage: {
            headerText: 'Mapa',
            polygonErrorMessage: 'Error al convertir el formato geojson con polígonos actualizados.',
            vectorDataToGeoJson: 'Error al recuperar el formato geojson de los datos vectoriales',
            shapeData: 'Datos de forma del mapa no configurados en el diseñador',
            shapeDateToGeoJson: 'Error al recuperar el geojson de los datos de forma',
            multiLayer: 'El mapa no admite varias capas en el diseñador',
            polygonLayer: 'El mapa sólo admite capas poligonales en el diseñador',
            fileTypes: 'El mapa sólo admite tipos de archivo incrustados y de forma en el diseñador',
            unSupported: 'El mapa no es compatible con el diseñador'
        },
        mapMarker: {
            colorRule: 'Regla de color de marcador',
            markerRule: 'Regla de marcador',
            enableMarkerRule: 'Habilitar regla de marcador',
            enableSizeRule: 'Habilitar regla de tamaño',
            sizeRule: {
                categoryName: 'Regla de tamaño de marcador',
                startSize: 'Iniciar tamaño',
                endSize: 'Finalizar tamaño',
                markers: 'Marcadores'
            },
            markerTemplate: {
                categoryName: 'Ajustes de marcador',
                showMarker: 'Habilitar marcador',
                background: 'Fondo',
                markerStyle: 'Estilo',
                markerSize: 'Tamaño',
                tooltip: 'Información sobre herramientas',
                latitude: 'Latitud',
                longitude: 'Longitud',
                markerStyles: {
                    circle: 'Círculo',
                    none: 'Ninguno',
                    rectangle: 'Rectángulo',
                    diamond: 'Diamante',
                    star: 'Estrella',
                    triangle: 'Triángulo',
                    image: 'Imagen',
                    pentagon: 'Pentágono'
                },
                markerImage: {
                    type: 'Tipo MIME',
                    mode: 'Modo redimensionar',
                    source: 'Fuente',
                    color: 'Color transparente',
                    value: 'Valor',
                    sourceTypes: {
                        external: 'Externo',
                        embedded: 'Insertado',
                        database: 'Base de datos'
                    },
                    resizeModes: {
                        autofit: 'Auto ajuste',
                        none: 'Ninguno'
                    }
                }
            }
        },
        dataElement: {
            categoryName: 'Elemento de datos',
            elementName: 'Nombre',
            elementOutput: {
                auto: 'Automático',
                noOutput: 'NoSalida',
                categoryName: 'Salida',
                output: 'Salida'
            }
        }
    },
    mapBindingFields: {
        headerText: 'Pares de campos de enlaces',
        addText: 'AÑADIR',
        updateText: 'Actualizar',
        fieldName: 'Nombre de campo',
        bindingExpression: 'Expresión de enlace',
        deletefield: 'Borrar campo',
        errorMessage: {
            bindingExpError: 'Elegir valor para expresión de enlace',
            fieldNameError: 'Elegir valor para nombre de campo',
            warningMessage: 'Es posible que los cambios que has realizado no se actualicen. ¿Quieres continuar?'
        }
    },
    mapBucket: {
        headerText: 'Cubo de mapa',
        addText: 'AÑADIR',
        updateText: 'Actualizar',
        startValue: 'Valor de inicio',
        endValue: 'Valor de fin',
        deletefield: 'Borrar campo',
        errorMessage: {
            warningMessage: 'Es posible que los cambios que has realizado no se actualicen. ¿Quieres continuar?'
        }
    },
    mapPolygons: {
        headerText: 'Polígonos',
        addText: 'AÑADIR',
        polygonText: 'Polígono de mapa',
        updateText: 'Actualizar',
        editPolygon: 'Editar',
        deletePolygon: 'Borrar polígono',
        properties: 'Propiedades de polígono',
        closeText: 'Cerrar',
        saveText: 'Guardar',
        data: 'Datos',
        spatial: 'Espacial',
        vectorData: 'Datos de vector',
        errorMessage: {
            warningMessage: 'Es posible que los cambios que has realizado no se actualicen. ¿Quieres continuar?'
        }
    },
    mapMarkerStyle: {
        headerText: 'Marcador de mapa',
        updateText: 'Actualizar',
        add: 'AÑADIR',
        label: 'Estilo del marcador',
        deletefield: 'Eliminar',
        errorMessage: 'Es posible que los cambios que has realizado no se actualicen. ¿Quieres continuar?',
        styles: {
            circle: 'Círculo',
            none: 'Ninguno',
            rectangle: 'Rectángulo',
            diamond: 'Diamante',
            star: 'Estrella',
            triangle: 'Triángulo',
            image: 'Imagen',
            pentagon: 'Pentágono'
        }
    },
    mapFieldDefinition: {
        mapFieldTitle: 'Definiciones de campos de mapa',
        fieldName: 'Nombre de campo',
        dataType: 'Tipo de dato',
        mapAlertMessage: 'Es posible que no se guarden los cambios que has realizado. ¿Quieres continuar?',
        addText: 'AÑADIR',
        errorMessage: {
            errorEmptyMessage: 'Especificar nombre de campo',
            sameCharacterMessage: 'El nombre de campo ya existe'
        },
        updateText: 'Actualizar'
    },
    mapCustomColors: {
        headerText: 'Colores personalizados',
        updateText: 'Actualizar',
        add: 'AÑADIR',
        label: 'Color',
        deletefield: 'Eliminar',
        errorMessage: 'Es posible que los cambios que has realizado no se actualicen. ¿Quieres continuar?',
    },
    reportVariable: {
        headerText: 'Variables',
        addText: 'AÑADIR',
        updateText: 'Actualizar',
        name: 'Nombre',
        value: 'Valor',
        deletefield: 'Borrar campo',
        checkBoxTooltip: 'Solo lectura',
        errorMessage: {
            warningMessage: 'Es posible que los cambios que has realizado no se actualicen. ¿Quieres continuar?',
            emptyAlert: 'El nombre no puede estar vacío',
            duplicateName: 'El nombre ya existe',
            specialCharacter: 'El nombre no debe contener espacios ni caracteres especiales'
        }
    },
    indicatorStates: {
        headerText: 'Estados indicadores',
        addText: 'AÑADIR',
        updateText: 'Actualizar',
        deletefield: 'Borrar campo',
        indicatorStyle: 'Ícono',
        color: 'Color',
        start: 'Inicio',
        end: 'Fin',
        scaleFactor: 'Factor de escala',
        indicatorStateValue: 'Valor de estado indicador',
        errorMessage: {
            warningMessage: 'Es posible que los cambios que has realizado no se actualicen. ¿Quieres continuar?'
        }
    },
    webDataExpression: {
        title: 'Datos de conexión',
        ok: 'OK',
        cancel: 'Cancelar',
        closeToolTip: 'Cerrar',
        url: 'URL',
        rawData: 'Datos Raw',
        parameters: 'Parámetro (s)',
        headers: 'Encabezado (s)',
        username: 'Nombre de usuario',
        password: 'Contraseña',
        valueWaterMark: 'Valor',
        emptyValue: 'Especificar el valor de la expresión'
    }
};