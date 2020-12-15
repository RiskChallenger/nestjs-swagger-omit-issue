Minimal reproduction library for [nestjs/swagger #1093](https://github.com/nestjs/swagger/issues/1090)

When generating swagger using

```
 $ yarn swagger
```

it generates the same response for both the post and put endpoints. 

It should generate a different response documentation. The post endpoint omits the property `notes`, while the put endpoint omits the property `description`.

It seems to 'save' the OmitType and use the OmitType from the last endpoint and use that everywhere.
