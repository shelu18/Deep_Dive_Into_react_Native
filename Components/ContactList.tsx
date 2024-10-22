import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts = [
        {
          uid: 1,
          name: 'shailendra Parihar',
          status: 'Just an extra ordinary learner',
          imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQGr0IWLi04_4w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722050900276?e=1735171200&v=beta&t=UxbOSlwGLUoH_hMLH3XFXxKbJLFgTGWKXMdk4bGFnSo',
        },
        {
          uid: 2,
          name: 'Satwik Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQEUfaxx040pEQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706110181429?e=1735171200&v=beta&t=BjzkM-xMaAqcoUv_X18cnWuu5Kk0ipVbTdAoYK_-hcE',
        },
        {
          uid: 3,
          name: 'Som Tyagi',
          status: 'Building cool stuff with React Native',
          imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQFIJv3UakhEqA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706115126935?e=1735171200&v=beta&t=2UuUMIV4TMgxuKYvvkJnxHKYAiR6UASrIY70toCMlf8',
        },
        {
          uid: 4,
          name: 'Tanay patil',
          status: 'Managing Cloud services',
          imageUrl: 'https://media.licdn.com/dms/image/v2/D5603AQF2M__yb4fvfw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1694921827828?e=1735171200&v=beta&t=gx1BIOrxPJv4HFYcNINSzJnfkNaaYYf2AvgtM7_afH4',
        },
        {
            uid: 5,
            name: 'Sameer',
            status: 'managing the backend',
            imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQHowdNYJT5fpQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1715425139417?e=1735171200&v=beta&t=y-KJl45LVLRAMb2lu84GC6nf4Ke5UFyXKLOGIFSM-t8',
          },
      ];
  return (
    <View>
      <Text style={styles.headingText}>ContactList</Text>
      <ScrollView
      style={styles.container}
      scrollEnabled={false}
      >
        {contacts.map(({uid, name, status, imageUrl}) => (
            <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri: imageUrl
                }}
                style={styles.userImage}
                />
                <View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userStatus}>{status}</Text>
                </View>
            </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        paddingHorizontal: 16,
        marginBottom: 4
        
    },
    userCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 3,
        backgroundColor: '#8D3DAF',
        padding: 8,
        borderRadius: 10
    },
    userImage: {
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        marginRight: 14
    },
    userName: {
        fontSize: 16,
        fontWeight: '600',
        color: '#FFF'
    },
    userStatus: {
        fontSize: 12
    }
})