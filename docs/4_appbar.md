## AppBar / FAB

git : https://callstack.github.io/react-native-paper/appbar.html

참조 : https://...


## 1. 

```
    constructor(props) {
        super(props)
        this.state = {
            headerTitle: "Home"
        }
    }
               
    {/* Header */}
    <Appbar.Header>
        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
            <MaterialCommunityIcons name='menu' color="white" size={24} />
        </TouchableOpacity>
        <Appbar.Content title={ this.state.headerTitle }/>
    </Appbar.Header>
    
                
```
## 2. FAB

```
                {/* Floating Button */}
                <FAB
                    style={styles.fab}
                    label='Add more'
                    color='white'
                    onPress={() => setFloatingAction()}
                />
                
    fab: {
        position: 'absolute',
        backgroundColor: '#0F49BA',
        right: 16,
        bottom: FAB_MAGIN_BOTTOM,
    },

```